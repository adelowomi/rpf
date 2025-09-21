import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Heart,
  Users,
  Church,
  Flame,
  Star,
  BookOpen,
  HandHeart,
  Music,
  Globe,
} from "lucide-react";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-rpf-gradient-primary text-rpf-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="rpf-title text-5xl md:text-6xl lg:text-7xl mb-6 tracking-tight">
              ABOUT RPF
            </h1>
            <p className="rpf-body text-xl md:text-2xl mb-8 text-rpf-white/90 max-w-3xl mx-auto">
              Discover our story, mission, and the heart behind Redeemed Pillar
              of Fire
            </p>
            <p className="rpf-tagline text-rpf-gold text-lg">
              "IT'S TIME TO SEEK THE LORD" - Hosea 10:12
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-rpf-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="rpf-title text-4xl md:text-5xl mb-8 text-rpf-black">
                  OUR STORY
                </h2>
                <div className="space-y-6 rpf-body text-lg text-rpf-black/80 leading-relaxed">
                  <p>
                    In October 2014, under the divine guidance and spiritual
                    mentorship of Bishop Adol Paul Obinwaogu, Pastor Austin
                    E-Ben founded Redeemed Pillar of Fire with a burning passion
                    to see revival sweep across the nations.
                  </p>
                  <p>
                    What began as a small gathering in London has grown into a
                    global movement with branches spanning across Europe,
                    Africa, North America, and university campuses worldwide.
                    Our journey has been marked by God's faithfulness,
                    miraculous testimonies, and lives transformed by the power
                    of the Gospel.
                  </p>
                  <p>
                    From our humble beginnings, we have remained steadfast in
                    our commitment to love, prayer, sound doctrine, and the
                    pursuit of revival. Every step of our journey has been
                    guided by the Holy Spirit and anchored in the Word of God.
                  </p>
                  <div className="bg-rpf-ivory p-6 rounded-xl border-l-4 border-rpf-gold">
                    <p className="rpf-tagline text-rpf-purple font-semibold italic">
                      "Sow to yourselves in righteousness, reap in mercy; break
                      up your fallow ground: for it is time to seek the Lord,
                      till he come and rain righteousness upon you." - Hosea
                      10:12
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1507692049790-de58290a4334?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Church History"
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-8 -right-8 bg-rpf-gradient-primary text-rpf-white p-6 rounded-2xl shadow-xl">
                  <div className="text-center">
                    <div className="text-3xl font-black">2014</div>
                    <div className="text-sm opacity-90">Founded</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Mission & Values Section */}
      <section className="py-20 bg-rpf-ivory">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="rpf-title text-4xl md:text-5xl mb-4 text-rpf-black">
                MISSION & VALUES
              </h2>
              <p className="rpf-body text-xl text-rpf-black/70 max-w-2xl mx-auto">
                Our foundation is built on biblical principles that guide
                everything we do
              </p>
            </div>

            {/* Mission Statement */}
            <div className="bg-rpf-gradient-primary text-rpf-white rounded-3xl p-12 mb-16 text-center">
              <h3 className="rpf-title text-3xl md:text-4xl mb-6">
                OUR MISSION
              </h3>
              <p className="rpf-body text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto">
                To spark and sustain revival and restore the early church as
                defined in Acts until the coming of Christ.
              </p>
            </div>

            {/* Core Values */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-rpf-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-rpf-gradient-fire rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-rpf-white" />
                </div>
                <h4 className="rpf-title text-xl mb-4 text-rpf-black">LOVE</h4>
                <p className="rpf-body text-rpf-black/70">
                  Love for Christ and the Brethren forms the foundation of our
                  ministry
                </p>
              </div>

              <div className="bg-rpf-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-rpf-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="h-8 w-8 text-rpf-white" />
                </div>
                <h4 className="rpf-title text-xl mb-4 text-rpf-black">
                  SOUND DOCTRINE
                </h4>
                <p className="rpf-body text-rpf-black/70">
                  Unwavering commitment to biblical truth and apostolic teaching
                </p>
              </div>

              <div className="bg-rpf-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-rpf-blue to-rpf-purple rounded-full flex items-center justify-center mx-auto mb-6">
                  <Star className="h-8 w-8 text-rpf-white" />
                </div>
                <h4 className="rpf-title text-xl mb-4 text-rpf-black">
                  TRANSFORMATION
                </h4>
                <p className="rpf-body text-rpf-black/70">
                  Spiritual growth and transformation through Christ's power
                </p>
              </div>

              <div className="bg-rpf-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-rpf-gold to-rpf-red rounded-full flex items-center justify-center mx-auto mb-6">
                  <HandHeart className="h-8 w-8 text-rpf-white" />
                </div>
                <h4 className="rpf-title text-xl mb-4 text-rpf-black">
                  SPIRITUAL DISCIPLINE
                </h4>
                <p className="rpf-body text-rpf-black/70">
                  Prayer, fasting, Word reading, and evangelism as lifestyle
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* What We Believe Section */}
      <section className="py-20 bg-rpf-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="rpf-title text-4xl md:text-5xl mb-4 text-rpf-black">
                WHAT WE BELIEVE
              </h2>
              <p className="rpf-body text-xl text-rpf-black/70 max-w-2xl mx-auto">
                Our faith is anchored in biblical truth and apostolic
                foundations
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="bg-rpf-ivory p-8 rounded-2xl">
                  <h3 className="rpf-title text-2xl mb-4 text-rpf-purple flex items-center">
                    <Church className="h-6 w-6 mr-3" />
                    THE WORD OF GOD
                  </h3>
                  <p className="rpf-body text-rpf-black/80 leading-relaxed">
                    We believe in the divine inspiration and authority of the
                    Holy Scriptures as the infallible Word of God, our final
                    authority in all matters of faith and practice.
                  </p>
                </div>

                <div className="bg-rpf-ivory p-8 rounded-2xl">
                  <h3 className="rpf-title text-2xl mb-4 text-rpf-red flex items-center">
                    <Flame className="h-6 w-6 mr-3" />
                    THE TRINITY
                  </h3>
                  <p className="rpf-body text-rpf-black/80 leading-relaxed">
                    We believe in one God eternally existing in three persons:
                    Father, Son, and Holy Spirit, co-equal in power, glory, and
                    majesty.
                  </p>
                </div>

                <div className="bg-rpf-ivory p-8 rounded-2xl">
                  <h3 className="rpf-title text-2xl mb-4 text-rpf-blue flex items-center">
                    <Heart className="h-6 w-6 mr-3" />
                    SALVATION
                  </h3>
                  <p className="rpf-body text-rpf-black/80 leading-relaxed">
                    We believe salvation is by grace through faith in Jesus
                    Christ alone, not by works, and that all who believe are
                    born again and become children of God.
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-rpf-ivory p-8 rounded-2xl">
                  <h3 className="rpf-title text-2xl mb-4 text-rpf-purple flex items-center">
                    <Users className="h-6 w-6 mr-3" />
                    THE CHURCH
                  </h3>
                  <p className="rpf-body text-rpf-black/80 leading-relaxed">
                    We believe in the universal Church as the body of Christ,
                    and the local church as God's appointed means for
                    fellowship, worship, discipleship, and evangelism.
                  </p>
                </div>

                <div className="bg-rpf-ivory p-8 rounded-2xl">
                  <h3 className="rpf-title text-2xl mb-4 text-rpf-gold flex items-center">
                    <Star className="h-6 w-6 mr-3" />
                    SPIRITUAL GIFTS
                  </h3>
                  <p className="rpf-body text-rpf-black/80 leading-relaxed">
                    We believe in the gifts of the Holy Spirit as described in
                    Scripture, given for the edification of the church and the
                    advancement of God's kingdom.
                  </p>
                </div>

                <div className="bg-rpf-ivory p-8 rounded-2xl">
                  <h3 className="rpf-title text-2xl mb-4 text-rpf-red flex items-center">
                    <Globe className="h-6 w-6 mr-3" />
                    THE GREAT COMMISSION
                  </h3>
                  <p className="rpf-body text-rpf-black/80 leading-relaxed">
                    We believe in the mandate to make disciples of all nations,
                    baptizing them and teaching them to observe all that Christ
                    commanded.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Senior Pastor E-Ben Section */}
      <section className="py-20 bg-rpf-ivory">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="rpf-title text-4xl md:text-5xl mb-4 text-rpf-black">
                SENIOR PASTOR E-BEN
              </h2>
              <p className="rpf-body text-xl text-rpf-black/70 max-w-2xl mx-auto">
                A man of God with a heart for revival and sound doctrine
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="text-center lg:text-left">
                <div className="relative inline-block">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                    alt="Pastor Austin E-Ben"
                    className="w-80 h-80 rounded-full object-cover mx-auto lg:mx-0 shadow-2xl border-4 border-rpf-gold"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-rpf-gradient-primary text-rpf-white p-4 rounded-full shadow-lg">
                    <Flame className="h-8 w-8" />
                  </div>
                </div>
              </div>
              <div>
                <h3 className="rpf-title text-3xl md:text-4xl mb-4 text-rpf-black">
                  PASTOR AUSTIN E-BEN
                </h3>
                <p className="rpf-body text-lg text-rpf-purple mb-6 font-semibold">
                  Founder & Senior Pastor
                </p>
                <div className="space-y-6 rpf-body text-lg text-rpf-black/80 leading-relaxed">
                  <p>
                    Pastor Austin E-Ben is a man of God with an unwavering
                    passion for revival and sound doctrine. Under the spiritual
                    guidance of his father in the Lord, Bishop Adol Paul
                    Obinwaogu, he founded Redeemed Pillar of Fire in October
                    2014.
                  </p>
                  <p>
                    His ministry is characterized by a deep love for God,
                    commitment to biblical truth, and a burning desire to see
                    souls transformed by the power of the Gospel. Pastor E-Ben's
                    teaching ministry emphasizes the importance of sound
                    doctrine, spiritual discipline, and the pursuit of holiness.
                  </p>
                  <p>
                    Through his leadership, RPF has grown from a small gathering
                    to a global movement, with branches across continents and
                    thousands of lives touched by the ministry. His vision
                    remains clear: to spark and sustain revival until the coming
                    of Christ.
                  </p>
                  <div className="bg-rpf-white p-6 rounded-xl border-l-4 border-rpf-purple">
                    <p className="rpf-tagline text-rpf-purple font-semibold italic">
                      "A city beyond walls: Jerusalem shall be inhabited as
                      towns without walls... For I, saith the Lord, will be unto
                      her a wall of fire round about, and will be the glory in
                      the midst of her." - Zechariah 2:4-5
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Pastor's Qualifications & Ministry Focus */}
            <div className="mt-16 grid md:grid-cols-3 gap-8">
              <div className="bg-rpf-white rounded-2xl p-8 shadow-lg text-center">
                <div className="w-16 h-16 bg-rpf-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="h-8 w-8 text-rpf-white" />
                </div>
                <h4 className="rpf-title text-xl mb-4 text-rpf-black">
                  SOUND DOCTRINE
                </h4>
                <p className="rpf-body text-rpf-black/70">
                  Committed to teaching biblical truth with clarity and
                  conviction
                </p>
              </div>

              <div className="bg-rpf-white rounded-2xl p-8 shadow-lg text-center">
                <div className="w-16 h-16 bg-rpf-gradient-fire rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-rpf-white" />
                </div>
                <h4 className="rpf-title text-xl mb-4 text-rpf-black">
                  PASTORAL CARE
                </h4>
                <p className="rpf-body text-rpf-black/70">
                  Shepherding God's people with love, wisdom, and compassion
                </p>
              </div>

              <div className="bg-rpf-white rounded-2xl p-8 shadow-lg text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-rpf-blue to-rpf-purple rounded-full flex items-center justify-center mx-auto mb-6">
                  <Globe className="h-8 w-8 text-rpf-white" />
                </div>
                <h4 className="rpf-title text-xl mb-4 text-rpf-black">
                  GLOBAL VISION
                </h4>
                <p className="rpf-body text-rpf-black/70">
                  Leading the expansion of RPF across nations and continents
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* What to Expect Section */}
      <section className="py-20 bg-rpf-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="rpf-title text-4xl md:text-5xl mb-4 text-rpf-black">
                WHAT TO EXPECT
              </h2>
              <p className="rpf-body text-xl text-rpf-black/70 max-w-2xl mx-auto">
                Experience the atmosphere of heaven on earth through worship,
                prayer, and sound doctrine
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <div className="bg-rpf-ivory rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-rpf-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <HandHeart className="h-8 w-8 text-rpf-white" />
                </div>
                <h3 className="rpf-title text-2xl mb-4 text-rpf-black">
                  HOUSE OF PRAYER
                </h3>
                <p className="rpf-body text-rpf-black/70 leading-relaxed">
                  Experience powerful corporate prayer that moves heaven and
                  earth. Our services begin and are saturated with heartfelt
                  prayer and intercession for revival.
                </p>
              </div>

              <div className="bg-rpf-ivory rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-rpf-gradient-fire rounded-full flex items-center justify-center mx-auto mb-6">
                  <Music className="h-8 w-8 text-rpf-white" />
                </div>
                <h3 className="rpf-title text-2xl mb-4 text-rpf-black">
                  SPIRIT-LED WORSHIP
                </h3>
                <p className="rpf-body text-rpf-black/70 leading-relaxed">
                  Join in passionate, authentic worship that ushers in God's
                  presence. Our worship is both contemporary and rooted in
                  biblical truth, creating an atmosphere for encounter.
                </p>
              </div>

              <div className="bg-rpf-ivory rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-rpf-blue to-rpf-purple rounded-full flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="h-8 w-8 text-rpf-white" />
                </div>
                <h3 className="rpf-title text-2xl mb-4 text-rpf-black">
                  SOUND DOCTRINE
                </h3>
                <p className="rpf-body text-rpf-black/70 leading-relaxed">
                  Receive life-changing biblical teaching that builds your faith
                  and equips you for spiritual growth. Every message is rooted
                  in Scripture and relevant to daily life.
                </p>
              </div>

              <div className="bg-rpf-ivory rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-rpf-gold to-rpf-red rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-rpf-white" />
                </div>
                <h3 className="rpf-title text-2xl mb-4 text-rpf-black">
                  LOVING COMMUNITY
                </h3>
                <p className="rpf-body text-rpf-black/70 leading-relaxed">
                  Find a family that genuinely cares for one another. Our
                  community is built on love, acceptance, and mutual support in
                  the journey of faith.
                </p>
              </div>

              <div className="bg-rpf-ivory rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-rpf-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Flame className="h-8 w-8 text-rpf-white" />
                </div>
                <h3 className="rpf-title text-2xl mb-4 text-rpf-black">
                  REVIVAL ATMOSPHERE
                </h3>
                <p className="rpf-body text-rpf-black/70 leading-relaxed">
                  Experience the tangible presence of God and witness His power
                  at work. Expect healing, deliverance, and supernatural
                  encounters with the living God.
                </p>
              </div>

              <div className="bg-rpf-ivory rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-rpf-purple to-rpf-blue rounded-full flex items-center justify-center mx-auto mb-6">
                  <Star className="h-8 w-8 text-rpf-white" />
                </div>
                <h3 className="rpf-title text-2xl mb-4 text-rpf-black">
                  TRANSFORMATION
                </h3>
                <p className="rpf-body text-rpf-black/70 leading-relaxed">
                  Come as you are and leave transformed. Our services are
                  designed to facilitate genuine spiritual growth and
                  life-changing encounters with Christ.
                </p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center bg-rpf-gradient-primary text-rpf-white rounded-3xl p-12">
              <h3 className="rpf-title text-3xl md:text-4xl mb-6">
                READY TO EXPERIENCE RPF?
              </h3>
              <p className="rpf-body text-xl mb-8 max-w-2xl mx-auto">
                Join us this Sunday and discover what it means to be part of a
                revival community that's passionate about God, His Word, and His
                people.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-rpf-gold text-rpf-black hover:bg-rpf-gold/90 rpf-body text-lg px-8 py-4 rounded-full font-bold shadow-lg">
                  Plan Your Visit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  className="border-rpf-white text-rpf-white hover:bg-rpf-white hover:text-rpf-black rpf-body text-lg px-8 py-4 rounded-full font-bold"
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
