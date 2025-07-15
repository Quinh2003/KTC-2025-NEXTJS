import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const renderingMethods = [
    {
      title: "Server-Side Rendering",
      subtitle: "SSR",
      href: "/task-ssr",
      gradient: "from-blue-500 via-blue-600 to-cyan-600",
      bgGradient: "from-blue-50 to-cyan-50",
      features: [
        "Real-time data",
        "Search engine friendly",
        "Server processing",
      ],
    },
    {
      title: "Static Site Generation",
      subtitle: "SSG",
      href: "/task-ssg",
      gradient: "from-emerald-500 via-green-600 to-teal-600",
      bgGradient: "from-emerald-50 to-teal-50",
      features: ["Pre-built pages", "Global CDN", "Zero server load"],
    },
    {
      title: "Incremental Static Regeneration",
      subtitle: "ISR",
      href: "/task-isr",
      gradient: "from-purple-500 via-violet-600 to-indigo-600",
      bgGradient: "from-purple-50 to-indigo-50",
      features: [
        "Auto regeneration",
        "Background updates",
        "Cached performance",
      ],
    },
    {
      title: "Client-Side Rendering",
      subtitle: "CSR",
      href: "/task-csr",
      gradient: "from-orange-500 via-red-500 to-pink-500",
      bgGradient: "from-orange-50 to-pink-50",
      features: [
        "Dynamic interactions",
        "Client-side routing",
        "Instant updates",
      ],
    },
  ];

  return (
    <div className="space-y-20 px-6 py-12 max-w-7xl mx-auto">
      {/* Grid Cards */}
      <div className="grid md:grid-cols-2 gap-10">
        {renderingMethods.map((method, index) => (
          <div
            key={index}
            className={`group relative bg-gradient-to-br ${method.bgGradient} p-6 rounded-3xl shadow-xl transition-all duration-300 hover:scale-105 border border-white/60 hover:shadow-2xl`}
          >
            {/* Decoration */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-white/30 to-transparent blur-2xl rounded-full"></div>

            {/* Content */}
            <div className="relative z-10 flex items-start gap-6">
              <div
                className={`p-4 rounded-2xl bg-gradient-to-br ${method.gradient} shadow-lg transition-transform group-hover:scale-110`}
              ></div>

              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-2xl font-bold text-gray-800 group-hover:text-gray-600 transition">
                    {method.title}
                  </h3>
                  <span
                    className={`px-3 py-1 text-white rounded-full text-sm font-semibold bg-gradient-to-r ${method.gradient}`}
                  >
                    {method.subtitle}
                  </span>
                </div>

                <div className="space-y-2 mb-6">
                  {method.features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-gray-600 text-sm font-medium"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                <Link
                  href={method.href}
                  className="inline-flex items-center gap-3 px-5 py-2.5 rounded-xl font-semibold bg-white/90 text-gray-800 shadow-md hover:shadow-lg transition group-hover:gap-4"
                >
                  <span>Khám phá ngay</span>
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Comparison Table */}
      <div className="relative bg-gradient-to-br from-white/80 to-gray-50/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/50 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>

        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-gray-900">
            So sánh chi tiết
          </h2>
          <p className="text-gray-600 mt-2 font-medium">
            Phân tích đầy đủ các phương pháp rendering
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="border-b border-gray-300">
                <th className="py-4 px-6 font-bold text-gray-800 text-base">
                  Phương pháp
                </th>
                <th className="py-4 px-6 font-bold text-gray-800 text-base">
                  Performance
                </th>
                <th className="py-4 px-6 font-bold text-gray-800 text-base">
                  SEO Score
                </th>
                <th className="py-4 px-6 font-bold text-gray-800 text-base">
                  Tương tác
                </th>
                <th className="py-4 px-6 font-bold text-gray-800 text-base">
                  Ứng dụng
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {[
                {
                  type: "SSR",
                  color: "from-blue-500 to-cyan-500",
                  performance: "75%",
                  seo: "Excellent",
                  interaction: "Good",
                  apps: "E-commerce, Blog, News",
                  seoClass: "bg-green-100 text-green-700",
                  interClass: "bg-yellow-100 text-yellow-700",
                  percent: "w-3/4",
                },
                {
                  type: "SSG",
                  color: "from-emerald-500 to-teal-500",
                  performance: "100%",
                  seo: "Perfect",
                  interaction: "Limited",
                  apps: "Landing pages, Docs",
                  seoClass: "bg-green-100 text-green-700",
                  interClass: "bg-red-100 text-red-700",
                  percent: "w-full",
                },
                {
                  type: "ISR",
                  color: "from-purple-500 to-indigo-500",
                  performance: "85%",
                  seo: "Excellent",
                  interaction: "Good",
                  apps: "CMS, Product pages",
                  seoClass: "bg-green-100 text-green-700",
                  interClass: "bg-yellow-100 text-yellow-700",
                  percent: "w-5/6",
                },
                {
                  type: "CSR",
                  color: "from-orange-500 to-pink-500",
                  performance: "50%",
                  seo: "Limited",
                  interaction: "Excellent",
                  apps: "Dashboards, Apps",
                  seoClass: "bg-red-100 text-red-700",
                  interClass: "bg-green-100 text-green-700",
                  percent: "w-1/2",
                },
              ].map((row, index) => (
                <tr key={index} className="hover:bg-gray-50 transition">
                  <td className="py-4 px-6 font-semibold text-gray-800 flex items-center gap-3">
                    <div
                      className={`w-3 h-3 rounded-full bg-gradient-to-r ${row.color}`}
                    ></div>
                    <span
                      className={`text-${
                        row.type === "CSR"
                          ? "orange"
                          : row.type === "ISR"
                          ? "purple"
                          : row.type === "SSR"
                          ? "blue"
                          : "emerald"
                      }-600 font-bold`}
                    >
                      {row.type}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className={`${row.percent} h-full bg-gradient-to-r ${row.color} rounded-full`}
                        ></div>
                      </div>
                      <span className="text-sm font-semibold text-gray-700">
                        {row.performance}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-bold ${row.seoClass}`}
                    >
                      {row.seo}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-bold ${row.interClass}`}
                    >
                      {row.interaction}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-gray-700 font-medium">
                    {row.apps}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
