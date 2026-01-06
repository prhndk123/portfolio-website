export interface Testimonial {
  id: number;
  name: string;
  role: string;
  testimonial: string;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Andi Pratama",
    role: "Owner UMKM Fashion",
    testimonial:
      "Aplikasi e-commerce ini sangat membantu bisnis saya. Tampilannya modern, mudah digunakan, dan alur belanjanya jelas meskipun masih berupa prototype.",
    image: "profile1.png",
  },
  {
    id: 2,
    name: "Siti Rahmawati",
    role: "Mahasiswa Universitas Digital",
    testimonial:
      "Web food delivery ini sangat user-friendly. Saya suka bagaimana daftar restoran dan menu ditampilkan dengan rapi dan responsif di berbagai device.",
    image: "profile2.png",
  },
  {
    id: 3,
    name: "Budi Santoso",
    role: "Karyawan Swasta",
    testimonial:
      "UI aplikasi ride booking ini simpel dan mudah dipahami. Estimasi harga dan pemilihan lokasi terasa realistis seperti aplikasi aslinya.",
    image: "profile3.png",
  },
  {
    id: 4,
    name: "Rina Kurnia",
    role: "Travel Blogger",
    testimonial:
      "Web booking travel ini memiliki desain yang bersih dan profesional. Fitur pencarian hotel dan tiket mudah digunakan meskipun masih menggunakan data dummy.",
    image: "profile4.png",
  },
  {
    id: 5,
    name: "Dewi Lestari",
    role: "Admin Toko Online",
    testimonial:
      "Marketplace web app ini sangat cocok sebagai portfolio. Struktur halaman produknya jelas dan pengalaman pengguna terasa nyaman.",
    image: "profile5.png",
  },
];
