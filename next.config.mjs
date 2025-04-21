/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_AWS_REGION: process.env.AWS_REGION,
    NEXT_PUBLIC_AWS_S3_BUCKET: process.env.AWS_S3_BUCKET,
  },
};

export default nextConfig;
