/** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	env: {
		BASE_URL: process.env.BASE_URL,
	},
	i18n: {
		locales: ['en-US'],
		defaultLocale: 'en-US',
	},
	experimental: { optimizeCss: true, legacyBrowsers: false, browsersListForSwc: true },
}

module.exports = nextConfig
