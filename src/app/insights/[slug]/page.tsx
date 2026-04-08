import { Metadata } from "next";
import Link from "next/link";
import { insights } from "@/data/insights";

export async function generateStaticParams() {
  return insights.map((insight) => ({
    slug: insight.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const insight = insights.find((i) => i.slug === slug);

  if (!insight) {
    return {
      title: "Insight Not Found",
    };
  }

  return {
    title: `${insight.title} | NEXOVA Insights`,
    description: insight.excerpt,
    keywords: [
      insight.title,
      insight.category,
      "consulting",
      "business",
      "transformation",
    ],
  };
}

export default async function InsightDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const insight = insights.find((i) => i.slug === slug);
  const allInsights = insights;

  if (!insight) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-nexova-black">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-nexova-white mb-4">
            Insight Not Found
          </h1>
          <Link href="/insights" className="btn-primary inline-block">
            Back to Insights
          </Link>
        </div>
      </div>
    );
  }

  // Get related insights
  const relatedInsights = allInsights
    .filter(
      (i) =>
        i.slug !== insight.slug &&
        (i.category === insight.category || i.featured)
    )
    .slice(0, 3);

  const formattedDate = new Date(insight.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-nexova-black pt-32 pb-16 px-4">
        <div className="absolute inset-0 dot-pattern opacity-10" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          {/* Breadcrumb */}
          <div className="mb-8 flex items-center justify-center gap-2 text-sm text-nexova-silver">
            <Link href="/insights" className="hover:text-nexova-accent transition-colors">
              Insights
            </Link>
            <span>/</span>
            <span className="text-nexova-accent">{insight.category}</span>
          </div>

          {/* Category Badge */}
          <div className="inline-block px-4 py-2 rounded-full bg-nexova-accent/10 border border-nexova-accent/50 mb-6">
            <p className="text-nexova-accent text-sm font-semibold">
              {insight.category}
            </p>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient-accent mb-6 leading-tight">
            {insight.title}
          </h1>

          {/* Metadata */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-nexova-silver">
            <span>{formattedDate}</span>
            <span className="hidden sm:inline">•</span>
            <span>By {insight.author}</span>
            <span className="hidden sm:inline">•</span>
            <span>{insight.readTime} minute read</span>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative py-20 px-4 bg-nexova-dark">
        <div className="max-w-3xl mx-auto">
          {/* Featured Image Placeholder */}
          <div className="w-full h-96 bg-gradient-to-br from-nexova-accent/20 to-nexova-purple/20 rounded-2xl mb-12 flex items-center justify-center border border-nexova-slate/30" />

          {/* Article Content */}
          <div className="prose prose-invert max-w-none">
            <div className="text-nexova-silver text-lg leading-relaxed whitespace-pre-wrap">
              {insight.content}
            </div>
          </div>

          {/* Share Section */}
          <div className="mt-12 pt-8 border-t border-nexova-slate/50">
            <p className="text-sm font-semibold text-nexova-white mb-4">
              Share this insight
            </p>
            <div className="flex gap-4">
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                  insight.title
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-nexova-slate/20 hover:bg-nexova-slate/40 text-nexova-silver text-sm transition-colors"
              >
                Twitter
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-nexova-slate/20 hover:bg-nexova-slate/40 text-nexova-silver text-sm transition-colors"
              >
                LinkedIn
              </a>
              <button
                onClick={() => navigator.clipboard.writeText(window.location.href)}
                className="px-4 py-2 rounded-lg bg-nexova-slate/20 hover:bg-nexova-slate/40 text-nexova-silver text-sm transition-colors"
              >
                Copy Link
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Author Bio */}
      <section className="relative py-16 px-4 bg-nexova-black border-t border-nexova-slate/50">
        <div className="max-w-3xl mx-auto">
          <div className="glass-card p-8 rounded-xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-nexova-accent to-nexova-purple flex items-center justify-center text-2xl" />
              <div>
                <p className="font-bold text-nexova-white">{insight.author}</p>
                <p className="text-sm text-nexova-silver">NEXOVA Consultant</p>
              </div>
            </div>
            <p className="text-nexova-silver">
              {insight.author} is a thought leader at NEXOVA bringing expertise and
              insights to help organizations navigate complex business challenges and
              capitalize on opportunities for transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Related Insights */}
      {relatedInsights.length > 0 && (
        <section className="relative py-20 px-4 bg-nexova-dark border-t border-nexova-slate/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-nexova-white">
                Related Insights
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {relatedInsights.map((related) => (
                <Link key={related.id} href={`/insights/${related.slug}`}>
                  <div className="glass-card-hover p-6 rounded-xl group h-full flex flex-col cursor-pointer transition-all">
                    <div className="w-full h-32 bg-gradient-to-br from-nexova-accent/20 to-nexova-purple/20 rounded-lg mb-4" />
                    <span className="text-xs font-semibold text-nexova-accent mb-2">
                      {related.category}
                    </span>
                    <h3 className="font-bold text-nexova-white mb-2 group-hover:text-gradient-accent transition-colors line-clamp-2 flex-grow">
                      {related.title}
                    </h3>
                    <p className="text-xs text-nexova-silver">
                      {new Date(related.date).toLocaleDateString()}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="relative py-20 px-4 bg-nexova-black border-t border-nexova-slate/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-nexova-white mb-6">
            Ready to Transform?
          </h2>
          <p className="text-nexova-silver text-lg mb-8">
            Let's discuss how NEXOVA can help you implement these insights and drive
            meaningful transformation.
          </p>
          <Link href="/contact" className="btn-primary inline-block">
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
