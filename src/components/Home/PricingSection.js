import { motion } from 'framer-motion';
import BorderGlow from '../BorderGlow';
import { useTheme } from '../ThemeProvider';
import { useLanguage } from '../LanguageProvider';
import GlowButton from '../RainbowButton';

function buildPlans(t) {
    return [
        {
            name: t('pricing.plan1.name'),
            badge: null,
            featured: false,
            price: '₹8,000',
            priceSub: t('pricing.priceSub.oneTime'),
            desc: t('pricing.plan1.desc'),
            features: [
                t('pricing.plan1.f1'),
                t('pricing.plan1.f2'),
                t('pricing.plan1.f3'),
                t('pricing.plan1.f4'),
                t('pricing.plan1.f5'),
                t('pricing.plan1.f6'),
            ],
            cta: t('cta.getStarted'),
            href: 'https://wa.me/917829475479?text=Hi%20Daksh%2C%20I%20am%20interested%20in%20the%20Landing%20Page%20package%20%E2%82%B98%2C000',
            btnStyle: 'outline',
        },
        {
            name: t('pricing.plan2.name'),
            badge: t('pricing.badge.mostPopular'),
            badgeColor: 'orange',
            featured: true,
            price: '₹15,000',
            priceSub: t('pricing.priceSub.oneTime'),
            desc: t('pricing.plan2.desc'),
            features: [
                t('pricing.plan2.f1'),
                t('pricing.plan2.f2'),
                t('pricing.plan2.f3'),
                t('pricing.plan2.f4'),
                t('pricing.plan2.f5'),
                t('pricing.plan2.f6'),
            ],
            cta: t('cta.getStarted'),
            href: 'https://wa.me/917829475479?text=Hi%20Daksh%2C%20I%20am%20interested%20in%20the%20Dynamic%20Website%20package%20%E2%82%B915%2C000',
            btnStyle: 'solid',
        },
        {
            name: t('pricing.plan3.name'),
            badge: null,
            featured: false,
            price: '₹30,000',
            priceSub: t('pricing.priceSub.oneTime'),
            desc: t('pricing.plan3.desc'),
            features: [
                t('pricing.plan3.f1'),
                t('pricing.plan3.f2'),
                t('pricing.plan3.f3'),
                t('pricing.plan3.f4'),
                t('pricing.plan3.f5'),
                t('pricing.plan3.f6'),
            ],
            cta: t('cta.getStarted'),
            href: 'https://wa.me/917829475479?text=Hi%20Daksh%2C%20I%20am%20interested%20in%20the%20E-commerce%20package%20%E2%82%B930%2C000',
            btnStyle: 'outline',
        },
        {
            name: t('pricing.plan4.name'),
            badge: t('pricing.badge.letsTalk'),
            badgeColor: 'gray',
            featured: false,
            price: null,
            priceSub: null,
            desc: t('pricing.plan4.desc'),
            features: [
                t('pricing.plan4.f1'),
                t('pricing.plan4.f2'),
                t('pricing.plan4.f3'),
                t('pricing.plan4.f4'),
                t('pricing.plan4.f5'),
                t('pricing.plan4.f6'),
            ],
            cta: t('cta.chatWithDaksh'),
            href: 'https://wa.me/917829475479?text=Hi%20Daksh%2C%20I%20have%20a%20custom%20project%20I%20would%20like%20to%20discuss',
            btnStyle: 'outline',
        },
    ];
}

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

function CheckIcon() {
    return (
        <svg className="h-4 w-4 shrink-0 text-[#FF9500]" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <circle cx="8" cy="8" r="8" fill="rgba(255,149,0,0.12)" />
            <path d="M4.5 8l2.5 2.5 4.5-5" stroke="#FF9500" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

const GLOW_COLORS = ['#FF9500', '#ff6b00', '#ffcc44'];

export default function PricingSection() {
    const { theme } = useTheme();
    const { t } = useLanguage();
    const isDark = theme === 'dark';
    const bgColor = isDark ? '#111111' : '#ffffff';
    const plans = buildPlans(t);

    return (
        <section id="pricing" className="py-20 bg-gray-50 dark:bg-[#0a0a0a]">
            <div className="mx-auto max-w-7xl px-4">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.5 }}
                        className="inline-block text-xs font-medium uppercase tracking-widest text-[#FF9500] mb-3"
                    >
                        {t('pricing.eyebrow')}
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white"
                    >
                        {t('pricing.title.left')}{' '}
                        <span className="text-[#FF9500]">{t('pricing.title.right')}</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                        className="mt-3 text-base text-gray-500 dark:text-[#888888]"
                    >
                        {t('pricing.sub')}
                    </motion.p>
                </div>

                {/* Cards Grid */}
                <motion.div
                    className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-4"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-80px' }}
                >
                    {plans.map((plan) => (
                        <motion.div key={plan.name} variants={cardVariants} className="relative flex flex-col h-full">
                            {/* Badge outside the glow card so it's not clipped */}
                            {plan.badge && (
                                <span
                                    className={`absolute -top-3 right-4 z-10 inline-flex items-center rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${
                                        plan.badgeColor === 'orange'
                                            ? 'bg-[#FF9500] text-black'
                                            : 'border border-gray-200 dark:border-[#333] bg-gray-100 dark:bg-[#1f1f1f] text-gray-500 dark:text-[#888888]'
                                    }`}
                                >
                                    {plan.badge}
                                </span>
                            )}
                            <BorderGlow
                                edgeSensitivity={22}
                                glowColor="30 100 60"
                                backgroundColor={bgColor}
                                borderRadius={16}
                                glowRadius={32}
                                glowIntensity={plan.featured ? 1.1 : 0.9}
                                coneSpread={28}
                                colors={GLOW_COLORS}
                                className="flex-1"
                            >
                                <div className="flex flex-col h-full p-6">
                                    {/* Plan name */}
                                    <h3 className="text-base font-semibold text-gray-900 dark:text-white">{plan.name}</h3>

                                    {/* Price */}
                                    <div className="mt-4">
                                        {plan.price ? (
                                            <>
                                                <span className="text-3xl font-bold text-gray-900 dark:text-white">{plan.price}</span>
                                                <span className="ml-2 text-sm text-gray-500 dark:text-[#888888]">{plan.priceSub}</span>
                                            </>
                                        ) : (
                                            <>
                                                <span className="text-3xl font-bold text-gray-900 dark:text-white">{t('pricing.custom.label')}</span>
                                                <p className="mt-1 text-xs text-gray-500 dark:text-[#888888]">{t('pricing.custom.sub')}</p>
                                            </>
                                        )}
                                    </div>

                                    {/* Description */}
                                    <p className="mt-3 text-sm text-gray-500 dark:text-[#888888] leading-relaxed">{plan.desc}</p>

                                    {/* Divider */}
                                    <div className="my-5 h-px bg-gray-100 dark:bg-[#1f1f1f]" />

                                    {/* Features */}
                                    <ul className="flex flex-col gap-2.5 flex-1">
                                        {plan.features.map((f) => (
                                            <li key={f} className="flex items-start gap-2.5 text-sm text-gray-700 dark:text-[#cccccc]">
                                                <CheckIcon />
                                                <span>{f}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* CTA Button */}
                                    <GlowButton
                                        asLink
                                        variant={plan.btnStyle === 'solid' ? 'primary' : 'secondary'}
                                        href={plan.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-7 w-full justify-center"
                                    >
                                        {plan.cta}
                                    </GlowButton>
                                </div>
                            </BorderGlow>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
