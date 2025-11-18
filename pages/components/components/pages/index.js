import Header from '../components/Header'
import FeatureCard from '../components/FeatureCard'

// Využijeme ikony (např. z React Icons)
const Icon = ({ children }) => <span className="inline-block">{children}</span>

const Home = () => {
  const features = [
    { title: 'Kofein', description: 'Centrální stimulant pro bdělost a snížení únavy.', icon: <Icon>⚡</Icon>, colorClass: 'text-pulse-blue' },
    { title: 'Taurin', description: 'Aminokyselina, která může hrát roli v neurologickém vývoji.', icon: <Icon>🧠</Icon>, colorClass: 'text-yellow-400' },
    { title: 'Vitamíny B', description: 'Podporují metabolismus a přeměnu živin na energii.', icon: <Icon>🔋</Icon>, colorClass: 'text-pulse-green' },
  ]

  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Sekce 1: HERO - Velký Poutavý Banner */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden border-b-4 border-pulse-blue/50">
          {/* Dynamický text */}
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <div className="z-20 text-center px-4">
            <h1 className="text-6xl md:text-8xl font-black mb-4 tracking-tight text-white drop-shadow-lg">
              TVŮJ **PULSE** JE NA VZESTUPU.
            </h1>
            <p className="text-xl md:text-3xl text-pulse-blue font-light shadow-neon-blue inline-block px-3 py-1">
              Vyvážený průvodce světem energetických nápojů.
            </p>
          </div>
          {/* Fiktivní pozadí: Může být gradient nebo fotka s černým překrytím */}
          <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-dark-bg via-gray-900 to-pulse-blue animate-pulse-slow"></div>
        </section>

        {/* Sekce 2: SLOŽENÍ - Interaktivní Karty */}
        <section id="slozeni" className="py-20 px-6 container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-pulse-green border-b pb-2 border-pulse-green/50">
            🔬 Co je Uvnitř?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </section>

        {/* Sekce 3: PRO A PROTI - Vyvážený Pohled */}
        <section id="pro-proti" className="py-20 px-6 container mx-auto bg-dark-card/50">
          <h2 className="text-4xl font-bold mb-12 text-center text-pulse-blue border-b pb-2 border-pulse-blue/50">
            ⚖️ Pro & Proti
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* PRO */}
            <div className="p-6 rounded-xl bg-green-900/20 border-l-4 border-pulse-green">
              <h3 className="text-2xl font-semibold mb-4 text-pulse-green">Benefity</h3>
              <ul className="list-disc list-inside space-y-3 text-gray-300">
                <li>**Zlepšení Soustředění:** Kofein pro kognitivní výkon.</li>
                <li>**Rychlá Energie:** Pohotový zdroj pro náročné úkoly.</li>
                <li>**Zvýšení Výkonu:** Pomoc při sportovních aktivitách (předtrénink).</li>
              </ul>
            </div>
            
            {/* PROTI */}
            <div className="p-6 rounded-xl bg-red-900/20 border-l-4 border-red-500">
              <h3 className="text-2xl font-semibold mb-4 text-red-400">Rizika</h3>
              <ul className="list-disc list-inside space-y-3 text-gray-300">
                <li>**Tepová Frekvence:** Možné bušení srdce a nespavost.</li>
                <li>**Cukr a Kalorie:** Vysoký obsah cukru v některých variantách.</li>
                <li>**Dehydratace:** Diuretické účinky kofeinu při nadměrné konzumaci.</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <footer className="py-8 text-center text-gray-500 border-t border-pulse-green/10">
        &copy; {new Date().getFullYear()} PulseUp | Data a Fakta
      </footer>
    </>
  )
}

export default Home