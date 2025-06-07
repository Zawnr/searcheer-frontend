import React from 'react';
import logoNada from '../../assets/images/Logo/LogoNada.png';

const testimonials = [
  {
    stars: 5,
    title: 'Amazing services',
    text: 'Metus faucibus sed turpis lectus feugiat tincidunt. Rhoncus sed tristique in dolor. Mus etiam et vestibulum venenatis',
    name: 'Marco Kihn',
    role: 'Happy Client',
    photo: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    stars: 5,
    title: 'Everything simple',
    text: 'Mus etiam et vestibulum venenatis viverra ut. Elit morbi bibendum ullamcorper augue faucibus',
    name: 'Kristin Hester',
    role: 'Happy Client',
    photo: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    stars: 5,
    title: 'Awesome, thank you!',
    text: 'Rhoncus sed tristique in dolor. Mus etiam et vestibulum venenatis viverra ut. Elit morbi bibendum ullamcorper augue faucibus. Nulla et tempor montes',
    name: 'Zion Cisneros',
    role: 'Happy Client',
    photo: 'https://randomuser.me/api/portraits/men/65.jpg',
  },
];

function StarRating({ count }) {
  return (
    <div className="flex space-x-1 text-yellow-400 mb-3">
      {[...Array(count)].map((_, i) => (
        <svg
          key={i}
          className="h-5 w-5 md:h-6 md:w-6"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.39 2.462a1 1 0 00-.364 1.118l1.287 3.974c.3.922-.755 1.688-1.54 1.118l-3.39-2.462a1 1 0 00-1.175 0l-3.39 2.462c-.784.57-1.838-.196-1.539-1.118l1.287-3.974a1 1 0 00-.364-1.118L2.045 9.4c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.974z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-[#eaf5f4] py-20 px-4">
      <h2 className="text-5xl font-bold text-center mb-3 text-black">
        Testimonials from Our Customers
      </h2>
      <p className="text-center text-lg mb-14 max-w-3xl mx-auto text-black">
        At eu lobortis pretium tincidunt amet lacus ut aenean aliquet. Blandit a
        massa elementum id...
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow p-9 flex flex-col justify-between border border-gray-100 min-h-[340px]"
          >
            <div>
              <StarRating count={t.stars} />
              <h3 className="font-bold text-2xl text-black mb-2">{t.title}</h3>
              <p className="italic text-gray-700 mb-8">{t.text}</p>
            </div>
            <div className="flex items-end mt-auto pt-2 relative">
              <img
                src={t.photo}
                alt={t.name}
                className="w-14 h-14 rounded-full object-cover mr-3"
              />
              <div className="flex-1 min-w-0">
                <p className="font-bold text-black leading-tight">{t.name}</p>
                <p className="text-gray-500 text-base leading-tight">
                  {t.role}
                </p>
              </div>
              <img
                src={logoNada}
                alt="quote"
                className="ml-auto w-10 h-10 object-contain -translate-y-5"
                style={{ minWidth: 36, minHeight: 36 }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
