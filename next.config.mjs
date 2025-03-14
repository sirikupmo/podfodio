const isProd = process.env.NODE_ENV === 'production';
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // แปลงเป็น Static HTML สำหรับ GitHub Pages
  images: { unoptimized: true }, // ปิด Image Optimization
  assetPrefix: isProd ? '/podfodio/' : '',
  basePath: isProd ? '/podfodio' : '',
  env: {
    portDev: '',
    liffId: '',
  },
};

export default nextConfig;
