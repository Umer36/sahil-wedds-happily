import { useState, useEffect } from "react";
import { Heart, Calendar, Sparkles, Music, MapPin, Clock } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import heroImage from "@/assets/wedding-hero.jpg";

const scheduleEvents = [
  {
    date: "31 OCT",
    day: "Thursday",
    title: "Kuran Khani Dawat",
    description: "Traditional pre-wedding function",
    icon: Music,
  },
  {
    date: "2 NOV",
    day: "Sunday",
    title: "Wedding (Nikah)",
    description: "The sacred wedding ceremony",
    icon: Heart,
  },
  {
    date: "3 NOV",
    day: "Monday",
    title: "Dawat-E-Walima",
    description: "Celebration dinner",
    icon: Sparkles,
  },
];

const Index = () => {
  const [showLoader, setShowLoader] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  useEffect(() => {
    // Start fade out after 2.5 seconds
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2500);

    // Remove loader completely after fade animation
    const hideTimer = setTimeout(() => {
      setShowLoader(false);
    }, 3500);

    // Auto-play music when component loads
    const audio = document.getElementById('background-music') as HTMLAudioElement;
    if (audio) {
      audio.play().catch(() => {
        // Handle autoplay restrictions
        console.log('Autoplay prevented by browser');
      });
    }

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      {/* Background Music - Indian Wedding Theme */}
      <audio
        id="background-music"
        loop
        autoPlay
        preload="auto"
        className="hidden"
        volume={0.3}
      >
        <source src="/audio/wedding-song.mp3" type="audio/mpeg" />
        <source src="/audio/wedding-song.wav" type="audio/wav" />
        <source src="/audio/wedding-song.ogg" type="audio/ogg" />
      </audio>
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
            <Heart className="w-20 h-20 mx-auto text-primary animate-pulse mb-8" fill="currentColor" />
            <h1 className="font-playfair text-7xl md:text-9xl font-bold text-white mb-6 drop-shadow-2xl">
              Sahil's Wedding
            </h1>
            <p className="font-playfair text-3xl md:text-4xl text-white/90 drop-shadow-lg animate-pulse">
              A Celebration of Love
            </p>
          </div>
        </div>
      )}

      {/* Main Content - Schedule */}
      {!showLoader && (
        <div className="animate-fade-in relative overflow-hidden">
          {/* Reduced Particles for Performance */}
          <div className="fixed inset-0 pointer-events-none z-0">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-primary/30 rounded-full animate-float-particle"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${i * 2}s`,
                  animationDuration: `20s`
                }}
              />
            ))}
          </div>
          
          {/* Header */}
          <section className="relative py-12 md:py-20 px-4 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0">
              <div className="absolute top-10 left-10 w-32 h-32 bg-primary/5 rounded-full animate-pulse-slow"></div>
              <div className="absolute bottom-10 right-10 w-24 h-24 bg-secondary/5 rounded-full animate-pulse-slow" style={{animationDelay: '1s'}}></div>
              <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-accent/5 rounded-full animate-pulse-slow" style={{animationDelay: '2s'}}></div>
            </div>
            
            {/* Reduced Sparkles */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(3)].map((_, i) => (
                <Sparkles
                  key={i}
                  className="absolute text-primary/20 animate-sparkle"
                  style={{
                    left: `${30 + i * 20}%`,
                    top: `${30 + i * 15}%`,
                    animationDelay: `${i}s`,
                    fontSize: `16px`
                  }}
                />
              ))}
            </div>
            
            <div className="max-w-4xl mx-auto text-center relative z-10">
              <div className="mb-6 relative">
                <div className="absolute inset-0 animate-ping-slow">
                  <Heart className="w-10 h-10 md:w-12 md:h-12 mx-auto text-primary/30" fill="currentColor" />
                </div>
                <Heart className="w-10 h-10 md:w-12 md:h-12 mx-auto text-primary animate-heartbeat relative z-10" fill="currentColor" />
              </div>
              <h1 className="font-playfair text-4xl md:text-7xl font-bold text-foreground mb-4 animate-text-reveal bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent bg-300% animate-gradient">
                Sahil's Wedding
              </h1>
              <p className="font-playfair text-xl md:text-3xl text-muted-foreground mb-6 animate-slide-up-delayed">
                A Celebration of Love
              </p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-foreground animate-fade-in-delayed">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 hover:bg-white/20 hover:scale-105 transition-all duration-500 animate-glow">
                  <Calendar className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                  <span className="font-sans text-sm md:text-base">31 Oct - 3 Nov 2025</span>
                </div>
              </div>
            </div>
          </section>

          {/* Invitation Card Section */}
          <section className="py-16 px-4 relative overflow-hidden">
            {/* Floating Hearts Background */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(10)].map((_, i) => (
                <Heart
                  key={i}
                  className={`absolute text-primary/15 animate-float-heart-${(i % 3) + 1}`}
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${100 + Math.random() * 20}%`,
                    width: `${15 + Math.random() * 20}px`,
                    height: `${15 + Math.random() * 20}px`,
                    animationDelay: `${Math.random() * 10}s`
                  }}
                  fill="currentColor"
                />
              ))}
            </div>


            <div className="max-w-4xl mx-auto relative z-10">
              <div className="bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 border-2 border-primary/20 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
                
                {/* Header */}
                <div className="text-center mb-8">
                  <h2 className="font-playfair text-3xl md:text-5xl text-foreground mb-2">Dawat-E-Walima</h2>
                  <div className="w-24 h-0.5 bg-primary mx-auto mb-6"></div>
                </div>

                {/* Couple Names */}
                <div className="text-center mb-8">
                  <div className="bg-card/50 rounded-2xl p-6 border border-primary/20">
                    <p className="text-muted-foreground mb-3 text-base md:text-lg">S/o. Mr. Rafiq Ajij Pakhali</p>
                    <h2 className="font-playfair text-4xl md:text-6xl text-foreground mb-4 animate-pulse">Sahil</h2>
                    <Heart className="w-6 h-6 mx-auto text-primary mb-3 animate-heartbeat" fill="currentColor" />
                    <p className="text-muted-foreground text-xl mb-3">With</p>
                    <h2 className="font-playfair text-4xl md:text-6xl text-foreground mb-4 animate-pulse" style={{animationDelay: '1s'}}>Mubina</h2>
                    <p className="text-muted-foreground text-base md:text-lg">D/o. Mr. Malik Gulab Shaikh</p>
                  </div>
                </div>

                {/* Walima Details */}
                <div className="text-center mb-8">
                  <h3 className="font-playfair text-xl md:text-2xl text-foreground mb-4">WALIMA RECEPTION</h3>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Calendar className="w-5 h-5 text-primary" />
                    <p className="text-foreground text-lg md:text-xl">Monday, 3rd November 2025</p>
                  </div>
                  <div className="flex items-center justify-center gap-2 mt-2">
                    <Clock className="w-5 h-5 text-primary" />
                    <p className="text-foreground text-lg md:text-xl">12 pm. Onwards</p>
                  </div>
                </div>

                {/* Walima Venue */}
                <div className="text-center mb-8">
                  <h3 className="font-playfair text-xl md:text-2xl text-foreground mb-4">WALIMA VENUE</h3>
                  <div className="flex items-start justify-center gap-1">
                    <MapPin className="w-5 h-5 text-primary mt-1" />
                    <div className="text-foreground text-center">
                      <p className="text-base md:text-lg">Biradari Multipurpose Hall,</p>
                      <p className="text-base md:text-lg">50 Footi Road, Shamraonagar, Sangli. 416 416</p>
                    </div>
                  </div>
                  <div className="w-full flex justify-center mt-4">
                    <a href="https://maps.google.com/?q=Biradari+Multipurpose+Hall+50+Footi+Road+Shamraonagar+Sangli" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm hover:bg-primary/90 transition-colors">
                      <MapPin className="w-4 h-4" />
                      Get Directions
                    </a>
                  </div>
                </div>

                {/* Contact Numbers */}
                <div className="text-center mb-8">
                  <h3 className="font-playfair text-xl md:text-2xl text-foreground mb-4">CONTACT</h3>
                  <div className="flex items-center justify-center gap-2 text-lg md:text-xl">
                    <a href="tel:+919767343667" className="text-primary hover:text-primary/80 transition-colors underline">
                      9767343667
                    </a>
                    <span className="text-foreground">/</span>
                    <a href="tel:+919767818006" className="text-primary hover:text-primary/80 transition-colors underline">
                      9767818006
                    </a>
                  </div>
                </div>

                {/* Footer */}
                <div className="text-center">
                  <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-full shadow-lg backdrop-blur-sm border-2 border-primary/20">
                    <Heart className="w-5 h-5 text-primary" fill="currentColor" />
                    <div className="text-center">
                      <p className="text-muted-foreground italic text-base">With Best Compliments From</p>
                      <p className="font-playfair text-xl text-foreground">Pakhali & Shaikh Family</p>
                    </div>
                    <Heart className="w-5 h-5 text-primary" fill="currentColor" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Schedule Section */}
          <section className="py-20 px-4 relative overflow-hidden">
            {/* Enhanced Floating Hearts Background */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(25)].map((_, i) => (
                <Heart
                  key={i}
                  className={`absolute text-primary/15 animate-float-heart-${(i % 3) + 1} hover:text-primary/30 transition-colors duration-1000`}
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${100 + Math.random() * 20}%`,
                    width: `${15 + Math.random() * 25}px`,
                    height: `${15 + Math.random() * 25}px`,
                    animationDelay: `${Math.random() * 12}s`,
                    filter: 'blur(0.5px)'
                  }}
                  fill="currentColor"
                />
              ))}
            </div>
            
            {/* Magical Dust Effect */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(30)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-0.5 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full animate-magical-dust"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 8}s`,
                    animationDuration: `${6 + Math.random() * 4}s`
                  }}
                />
              ))}
            </div>

            <div className="max-w-5xl mx-auto relative z-10">
              <div className="text-center mb-12 md:mb-16 animate-fade-in">
                <h2 className="font-playfair text-3xl md:text-6xl font-bold text-foreground mb-4 animate-slide-down">
                  Wedding Schedule
                </h2>
                <p className="text-muted-foreground text-base md:text-lg font-sans animate-slide-up">
                  Join us for these beautiful moments
                </p>
              </div>

              <div className="overflow-hidden rounded-2xl border-2 border-primary/20 shadow-2xl backdrop-blur-sm bg-card/80 animate-fade-in transform hover:scale-[1.02] transition-all duration-700 ease-out relative group">
                {/* Animated Border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-20 transition-opacity duration-500 animate-border-glow"></div>
                <Table className="w-full" style={{borderSpacing: '0'}}>
                  <TableHeader>
                    <TableRow className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 hover:from-primary/15 hover:via-secondary/15 hover:to-accent/15 border-b-2 border-primary/20 transition-all duration-500">
                      <TableHead className="font-playfair text-lg md:text-xl font-bold text-foreground py-2 md:py-4 px-2 w-1/4">
                        Date
                      </TableHead>
                      <TableHead className="font-playfair text-lg md:text-xl font-bold text-foreground py-4 md:py-6 px-2 w-1/2">
                        Event
                      </TableHead>
                      <TableHead className="font-playfair text-lg md:text-xl font-bold text-foreground py-4 md:py-6 px-2 w-1/4 hidden sm:table-cell">
                        Details
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {scheduleEvents.map((event, index) => {
                      const Icon = event.icon;
                      return (
                        <TableRow
                          key={index}
                          className="hover:bg-primary/5 transition-colors duration-300 group border-b border-border/50"
                        >
                          <TableCell className="font-sans font-semibold text-primary py-4 md:py-6 px-2">
                            <div className="flex items-center gap-1 md:gap-2">
                              <Calendar className="w-4 h-4 md:w-5 md:h-5" />
                              <div className="flex flex-col">
                                <span className="text-sm md:text-lg font-bold">{event.date}</span>
                                <span className="text-xs md:text-sm text-muted-foreground font-medium">{event.day}</span>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell className="py-4 md:py-6 px-2">
                            <div className="flex items-center gap-2 md:gap-3">
                              <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
                                <Icon className="w-4 h-4 md:w-6 md:h-6 text-white" />
                              </div>
                              <div className="flex flex-col">
                                <span className="font-playfair text-sm md:text-xl font-semibold text-foreground">
                                  {event.title}
                                </span>
                                <span className="text-xs md:hidden text-muted-foreground mt-1">
                                  {event.description}
                                </span>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell className="font-sans text-muted-foreground py-4 md:py-6 px-2 hidden sm:table-cell">
                            <span className="text-sm md:text-base">
                              {event.description}
                            </span>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </div>

              {/* Decorative Footer */}
              <div className="text-center mt-20 animate-fade-in relative">
                {/* Magical Circle */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-64 h-64 border border-primary/10 rounded-full animate-spin-very-slow"></div>
                  <div className="absolute w-48 h-48 border border-secondary/10 rounded-full animate-spin-reverse"></div>
                </div>
                
                <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-full shadow-lg backdrop-blur-sm border-2 border-primary/20 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 relative z-10 animate-float-gentle">
                  <Heart className="w-6 h-6 text-primary animate-heartbeat" fill="currentColor" />
                  <p className="font-playfair text-lg md:text-xl text-foreground animate-text-shimmer">
                    We can&apos;t wait to celebrate with you!
                  </p>
                  <Heart className="w-6 h-6 text-primary animate-heartbeat" fill="currentColor" style={{animationDelay: '0.5s'}} />
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default Index;
