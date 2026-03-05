import React from 'react';

const Gallery = () => {
    const images = [
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600",
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600",
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600",
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600",
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600",
        "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=600",
        "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=600",
        "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=600"
    ];

    return (
        <section id="gallery" className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-gold font-semibold tracking-wider uppercase text-sm mb-4 block">
                        Visual Tour
                    </span>
                    <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-6">
                        Property Gallery
                    </h2>
                    <p className="text-lg text-gray-600">
                        Take a closer look at the stunning interiors and exteriors of the houses available.
                    </p>
                </div>

                {/* Gallery Grid - Masonry style approximation using columns */}
                <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                    {images.map((src, index) => (
                        <div
                            key={index}
                            className="relative rounded-2xl overflow-hidden group mb-6 inline-block w-full break-inside-avoid shadow-sm hover:shadow-xl transition-shadow duration-300"
                        >
                            <img
                                src={src}
                                alt={`Property Image ${index + 1}`}
                                className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <svg className="w-12 h-12 text-white transform scale-50 group-hover:scale-100 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Gallery;
