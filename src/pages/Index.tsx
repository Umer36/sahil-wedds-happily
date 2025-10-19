import { useState, useEffect } from "react";
import { Heart, Calendar, MapPin, Clock, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/wedding-hero.jpg";

const Index = () => {
  const [showLoader, setShowLoader] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2500);

    const hideTimer = setTimeout(() => {
      setShowLoader(false);
    }, 3500);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 via-pink-200 to-red-200 relative overflow-hidden">
      {/* Loader Screen */}
      {showLoader && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-1000 ${
            fadeOut ? "opacity-0" : "opacity-100"
          }`}
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60" />
          <div className="relative z-10 text-center px-4 animate-fade-in">
            <Heart className="w-20 h-20 mx-auto text-white animate-heartbeat mb-8" fill="currentColor" />
            <h1 className="font-playfair text-3xl sm:text-5xl md:text-8xl font-bold text-white mb-6 drop-shadow-2xl">
              Sahil & Mubina
            </h1>
            <p className="font-playfair text-xl sm:text-2xl md:text-3xl text-white/90 animate-pulse drop-shadow-lg">
              Reception Invitation
            </p>
          </div>
        </div>
      )}

      {/* Main Invitation Card */}
      {!showLoader && (
        <div className="animate-fade-in relative overflow-hidden min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-rose-100/80 via-pink-200/80 to-red-200/80">
          {/* Animated Background Circles */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(5)].map((_, i) => (
              <div
                key={`circle-${i}`}
                className="absolute rounded-full bg-gradient-to-br from-pink-300/20 to-rose-400/20 animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: `${100 + Math.random() * 200}px`,
                  height: `${100 + Math.random() * 200}px`,
                  animationDelay: `${Math.random() * 10}s`,
                  animationDuration: `${8 + Math.random() * 4}s`
                }}
              />
            ))}
          </div>
          {/* Main Invitation Card */}
          <Card className="max-w-2xl w-full mx-auto bg-gradient-to-br from-white/90 via-pink-50/95 to-rose-50/90 backdrop-blur-xl shadow-2xl border-2 border-primary/30 relative z-10 animate-slide-in hover:scale-[1.02] transition-all duration-500">
            {/* Floating Hearts inside card */}
            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden rounded-lg">
              {[...Array(10)].map((_, i) => (
                <Heart
                  key={`heart-${i}`}
                  className="absolute text-primary/15 animate-float"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    width: `${20 + Math.random() * 20}px`,
                    height: `${20 + Math.random() * 20}px`,
                    animationDelay: `${Math.random() * 8}s`,
                    animationDuration: `${5 + Math.random() * 3}s`
                  }}
                  fill="currentColor"
                />
              ))}
            </div>
            
            {/* Sparkles inside card */}
            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden rounded-lg">
              {[...Array(8)].map((_, i) => (
                <Sparkles
                  key={`sparkle-${i}`}
                  className="absolute text-primary/20 animate-sparkle"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 6}s`,
                    fontSize: `${16 + Math.random() * 10}px`
                  }}
                />
              ))}
            </div>
            <CardContent className="p-8 md:p-12 relative z-10">
              {/* Header */}
              <div className="text-center mb-8">
                <div className="flex justify-center items-center gap-4 mb-6 animate-fade-in">
                  <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-primary"></div>
                  <div className="relative">
                    <div className="absolute inset-0 bg-rose-300 rounded-full animate-ping opacity-20"></div>
                    <Heart className="w-8 h-8 text-primary animate-heartbeat relative z-10" fill="currentColor" />
                  </div>
                  <div className="w-16 h-0.5 bg-gradient-to-l from-primary to-transparent"></div>
                </div>
                
                <h1 className="font-playfair text-4xl md:text-6xl font-bold text-primary mb-4">
                  You're Invited
                </h1>
                
                <p className="font-playfair text-lg md:text-xl text-muted-foreground mb-6">
                  To celebrate the reception of
                </p>
                
                <h2 className="font-playfair text-5xl md:text-7xl font-bold bg-gradient-to-r from-rose-600 via-pink-600 to-red-600 bg-clip-text text-transparent mb-2 animate-bounce-in" style={{animationDelay: '0.5s'}}>
                  Sahil
                </h2>
                
                <div className="flex justify-center items-center gap-4 my-6 animate-fade-in" style={{animationDelay: '1s'}}>
                  <div className="w-12 h-0.5 bg-gradient-to-r from-rose-400 to-pink-500"></div>
                  <Heart className="w-6 h-6 text-rose-500 animate-heartbeat" fill="currentColor" />
                  <div className="w-12 h-0.5 bg-gradient-to-l from-pink-500 to-rose-400"></div>
                </div>
                
                <h2 className="font-playfair text-5xl md:text-7xl font-bold bg-gradient-to-r from-rose-600 via-pink-600 to-red-600 bg-clip-text text-transparent animate-bounce-in" style={{animationDelay: '1.5s'}}>
                  Mubina
                </h2>
              </div>

              {/* Wedding Details */}
              <div className="space-y-6 mb-8">
                {/* Date */}
                <div className="flex items-center justify-center gap-4 p-6 glass-effect rounded-xl hover:scale-[1.02] transition-all duration-300 border border-primary/20">
                  <Calendar className="w-6 h-6 text-primary" />
                  <div className="text-center">
                    <p className="font-playfair text-2xl font-semibold bg-gradient-to-r from-rose-700 to-pink-700 bg-clip-text text-transparent">
                      3rd November 2025
                    </p>
                    <p className="text-rose-600/80">
                      Monday
                    </p>
                  </div>
                </div>

                {/* Time */}
                <div className="flex items-center justify-center gap-4 p-6 glass-effect rounded-xl hover:scale-[1.02] transition-all duration-300 border border-primary/20">
                  <Clock className="w-6 h-6 text-primary" />
                  <div className="text-center">
                    <p className="font-playfair text-2xl font-semibold bg-gradient-to-r from-rose-700 to-pink-700 bg-clip-text text-transparent">
                      12:00 PM - 3:00 PM
                    </p>
                    <p className="text-rose-600/80">
                      Reception ceremony
                    </p>
                  </div>
                </div>

                {/* Venue */}
                <div className="flex items-center justify-center gap-4 p-6 glass-effect rounded-xl hover:scale-[1.02] transition-all duration-300 border border-primary/20">
                  <MapPin className="w-6 h-6 text-primary" />
                  <div className="text-center">
                    <p className="font-playfair text-2xl font-semibold bg-gradient-to-r from-rose-700 to-pink-700 bg-clip-text text-transparent">
                      Biradari Multipurpose Hall
                    </p>
                    <p className="text-rose-600/80 mb-3">
                      50 Footi Road, Shamraonagar, Sangli
                    </p>
                    <button 
                      onClick={() => window.open('https://maps.google.com/?q=Biradari+Multipurpose+Hall+50+Footi+Road+Shamraonagar+Sangli', '_blank')}
                      className="text-rose-600 hover:text-rose-700 text-xs underline underline-offset-2 hover:underline-offset-4 transition-all duration-300 flex items-center gap-1 mx-auto"
                    >
                      <MapPin className="w-3 h-3" />
                      Directions
                    </button>
                  </div>
                </div>
              </div>

              {/* Family Details */}
              <div className="text-center mb-6 p-6 glass-effect rounded-xl border border-primary/20">
                <p className="text-sm text-rose-600/80 font-semibold">
                  The Pakhali family requests the honor of your presence at this blessed celebration
                </p>
              </div>

              {/* Footer Message */}
              <div className="text-center">
                <div className="flex justify-center items-center gap-4 mb-4 animate-bounce-in">
                  <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-primary to-primary animate-shimmer"></div>
                  <Sparkles className="w-8 h-8 text-primary animate-sparkle drop-shadow-lg" />
                  <div className="w-16 h-0.5 bg-gradient-to-l from-primary via-primary to-transparent animate-shimmer"></div>
                </div>
                
                <p className="font-playfair text-lg md:text-xl text-rose-600/90 mb-4 animate-fade-in">
                  Your presence would make our special day even more memorable
                </p>
                
                <p className="font-playfair text-base text-rose-500/80 italic animate-pulse">
                  "Two hearts, one love, one beautiful journey ahead"
                </p>
                
                <div className="flex justify-center items-center gap-3 mt-6 animate-bounce-in">
                  <Heart className="w-5 h-5 text-primary animate-heartbeat drop-shadow-lg hover:scale-125 transition-transform duration-300" fill="currentColor" />
                  <Heart className="w-6 h-6 text-primary animate-heartbeat drop-shadow-lg hover:scale-125 transition-transform duration-300" fill="currentColor" style={{animationDelay: '0.3s'}} />
                  <Heart className="w-5 h-5 text-primary animate-heartbeat drop-shadow-lg hover:scale-125 transition-transform duration-300" fill="currentColor" style={{animationDelay: '0.6s'}} />
                </div>
                
                {/* Decorative Footer */}
                <div className="mt-8 pt-6 border-t border-rose-200/50">
                  <p className="text-xs text-rose-400/60 font-light tracking-wider">
                    With love and blessings • November 2025
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Index;