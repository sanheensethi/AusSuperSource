import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20 md:pt-40 md:pb-24 lg:pb-32">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About Us
            </h1>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed mb-6">
              Australian Super Source Pty Ltd, specialist self-managed superannuation firm, has been facilitating Accountants & Financial advisors on wholesale SMSF solution provider for more than 8 years, based in Sydney and offering services throughout Australia.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              Our staff are regularly keeping an eye on changes to legislation to ensure you and clients, are informed & kept up to date with the current best practice for SMSF management.
            </p>

            <p className="text-lg leading-relaxed mb-8">
              We are facilitating accountants & financial advisors so that they can get their clients' smsf administration, compliance and audit and all the documentation regarding rollovers, pension commencement & pension commutation, pension continuation, minutes, members' statements, contributing splitting, contribution reserves, arranging actuarial certificates, arranging property valuations and other compliance issues.
            </p>

            <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-md">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-lg font-medium">
                  We respect your privacy with your clients. We do not directly contact your clients, we work as we are representing you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
