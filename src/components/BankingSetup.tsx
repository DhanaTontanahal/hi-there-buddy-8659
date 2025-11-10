import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, CreditCard, Eye, Coins, Lock, Calendar, ArrowLeft } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";

const bankingAds = [
  {
    id: 1,
    title: "Premium Credit Card",
    description: "Get 5% cashback on all purchases",
    offer: "0% APR for 12 months",
    gradient: "from-blue-600 to-blue-800",
  },
  {
    id: 2,
    title: "Home Loans Made Easy",
    description: "Low interest rates starting at 3.5%",
    offer: "Pre-approval in 24 hours",
    gradient: "from-green-600 to-green-800",
  },
  {
    id: 3,
    title: "Mortgage Refinancing",
    description: "Save thousands on your monthly payments",
    offer: "No closing costs this month",
    gradient: "from-purple-600 to-purple-800",
  },
];

const setupItems = [
  {
    icon: CreditCard,
    title: "Link your payment method",
    description: "Connect your card or bank account securely",
    alert: true,
  },
  {
    icon: Eye,
    title: "Set up your security PIN",
    description: "Create a PIN for added security",
    arrow: true,
  },
  {
    icon: Coins,
    title: "Configure automatic payments",
    description: "Never miss a payment deadline",
    arrow: true,
  },
  {
    icon: Lock,
    title: "Manage security settings",
    description: "Set spending limits and freeze options",
    arrow: true,
  },
  {
    icon: Calendar,
    title: "Choose your billing cycle",
    description: "Select a date that works for you",
    arrow: true,
  },
];

const BankingSetup = () => {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="p-4 flex items-center gap-4">
          <button className="p-2 hover:bg-accent rounded-full transition-colors">
            <ArrowLeft className="w-6 h-6" />
          </button>
        </div>

        {/* Ads Carousel */}
        <div className="px-4 mb-6">
          <Carousel setApi={setApi} opts={{ loop: true }}>
            <CarouselContent>
              {bankingAds.map((ad) => (
                <CarouselItem key={ad.id}>
                  <Card className="border-0 overflow-hidden">
                    <CardContent className={`p-6 bg-gradient-to-br ${ad.gradient} text-white`}>
                      <h3 className="text-xl font-bold mb-2">{ad.title}</h3>
                      <p className="text-white/90 mb-3">{ad.description}</p>
                      <div className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-medium">
                        {ad.offer}
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Title */}
        <div className="px-4 mb-6">
          <h1 className="text-4xl font-bold">Set things up</h1>
        </div>

        {/* Setup Items List */}
        <div className="space-y-1">
          {setupItems.map((item, index) => (
            <button
              key={index}
              className="w-full px-4 py-4 flex items-start gap-4 hover:bg-accent/50 transition-colors"
            >
              <div className="flex-shrink-0 mt-1">
                <item.icon className="w-6 h-6" />
              </div>
              <div className="flex-1 text-left">
                <h3 className="font-semibold text-base mb-0.5">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
              {item.alert && (
                <div className="flex-shrink-0 mt-1">
                  <div className="w-6 h-6 bg-foreground rounded-full flex items-center justify-center">
                    <span className="text-background text-xs font-bold">!</span>
                  </div>
                </div>
              )}
              {item.arrow && (
                <div className="flex-shrink-0 mt-1">
                  <ChevronRight className="w-6 h-6 text-muted-foreground" />
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BankingSetup;
