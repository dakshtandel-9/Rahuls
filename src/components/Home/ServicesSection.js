import { motion } from 'framer-motion';
import FlowingMenu from '../FlowingMenu';
import { useTheme } from '../ThemeProvider';
import { useLanguage } from '../LanguageProvider';

export default function ServicesSection() {
  const { theme } = useTheme();
  const { t } = useLanguage();

  const isDark = theme === 'dark';

  const menuItems = [
    {
      text: t('services.landingPage'),
      link: '/#contact',
      image: 'https://res.cloudinary.com/dwethh3fq/image/upload/w_1200,f_auto,q_auto/v1776423480/Screenshot_2026-04-15_at_17.28.05_fo24eo.png',
    },
    {
      text: t('services.businessWebsite'),
      link: '/#contact',
      image: 'https://res.cloudinary.com/dwethh3fq/image/upload/w_1200,f_auto,q_auto:low/v1776424164/Screenshot_2026-04-15_at_17.28.19_yx04sp.png',
    },
    {
      text: t('services.ecommerce'),
      link: '/#contact',
      image: 'https://res.cloudinary.com/dwethh3fq/image/upload/w_1200,f_auto,q_auto:low/v1776424164/Screenshot_2026-04-15_at_19.33.18_cjxka9.png',
    },
    {
      text: t('services.customApp'),
      link: '/#contact',
      image: 'https://res.cloudinary.com/dwethh3fq/image/upload/w_1200,f_auto,q_auto:low/v1776424165/Screenshot_2026-04-15_at_17.28.32_cshwyt.png',
    },
  ];

  return (
    <section id="services" className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="inline-block text-xs font-medium uppercase tracking-widest text-[#FF9500] mb-3"
          >
            {t('services.eyebrow')}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white"
          >
            {t('services.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="mt-3 text-base text-gray-600 dark:text-[#888888]"
          >
            {t('services.sub')}
          </motion.p>
        </div>

        {/* Flowing Menu */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl overflow-hidden border border-gray-200 dark:border-[#1f1f1f]"
          style={{ height: '400px' }}
        >
          <FlowingMenu
            items={menuItems}
            speed={18}
            bgColor={isDark ? '#0a0a0a' : '#f9fafb'}
            textColor={isDark ? '#ffffff' : '#111111'}
            marqueeBgColor="#FF9500"
            marqueeTextColor="#000000"
            borderColor={isDark ? '#1f1f1f' : '#e5e7eb'}
          />
        </motion.div>

        {/* Hint */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-5 text-center text-xs text-gray-400 dark:text-[#555555] tracking-wide uppercase"
        >
          {t('services.hint')}
        </motion.p>
      </div>
    </section>
  );
}
