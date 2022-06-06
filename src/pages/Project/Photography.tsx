const Photography: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <h1 className="text-xl md:text-3xl border font-bold border-white rounded-md py-4 px-6 w-min mx-auto my-12">
        Photography
      </h1>
      <div className="space-y-24">
        <section>
          <img src="/img/photography/mumer.png" />
          <div className="text-xl mb-2 mt-6 font-medium">MURMER Shop</div>
          <p>Catalog Photo</p>
        </section>
        
        <section>
          <img src="/img/photography/prewedding.png" />
          <div className="text-xl mb-2 mt-6 font-medium">Prewedding</div>
        </section>

        <section>
          <img src="/img/photography/moto.png" />
          <div className="text-xl mb-2 mt-6 font-medium">MotoProject</div>
          <p>Product Photo</p>
        </section>

        <section>
          <img src="/img/photography/cafe.png" />
          <div className="text-xl mb-2 mt-6 font-medium">Cafe in A Day</div>
          <a href="http://shorturl.at/mvNT9">Product Photo</a>
        </section>

        <section>
          <img src="/img/photography/xiaomi.png" />
          <div className="text-xl mb-2 mt-6 font-medium">Xiaomi Smartphone</div>
        </section>
      </div>
    </div>
  )
}

export default Photography
