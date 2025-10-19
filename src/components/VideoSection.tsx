const VideoSection = () => {
  return (
    <section id="video" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Video */}
            <div className="animate-slide-in-left">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/bNUNuMQ1yj4"
                  title="Dr. Satish Nayak - Introduction"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>

            {/* Ideology */}
            <div className="space-y-6 animate-slide-in-right">
              <div className="inline-block">
                <span className="text-sm font-medium tracking-wider uppercase text-secondary bg-secondary/10 px-4 py-2 rounded-full">
                  Philosophy
                </span>
              </div>
              
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
                Dr. Nayak's Ideology
              </h2>
              
              <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary rounded-full" />
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Embracing innovation with compassion, Dr. Nayak's ideology centers on{" "}
                <span className="text-primary font-medium">personalized patient care</span>, 
                integrating advanced surgical techniques with a deep understanding of each individual's needs 
                to foster healing and restore quality of life.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Every patient deserves not just medical excellence, but also empathy, clear communication, 
                and a treatment plan tailored to their unique circumstances.
              </p>

              <div className="grid grid-cols-3 gap-6 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">10,000+</div>
                  <div className="text-sm text-muted-foreground">Surgeries</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">15+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">100%</div>
                  <div className="text-sm text-muted-foreground">Dedicated Care</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
