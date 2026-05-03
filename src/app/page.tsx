"use client";

import HeroBillboardDashboard from "@/components/sections/hero/HeroBillboardDashboard";
import NavbarStyleFullscreen from "@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen";
import FeatureBento, { type FeatureCard } from "@/components/sections/feature/FeatureBento";
import FeatureHoverPattern from "@/components/sections/feature/featureHoverPattern/FeatureHoverPattern";
import MetricSplitMediaAbout from "@/components/sections/about/MetricSplitMediaAbout";
import TestimonialCardSix from "@/components/sections/testimonial/TestimonialCardSix";
import PricingCardThree from "@/components/sections/pricing/PricingCardThree";
import FaqDouble from "@/components/sections/faq/FaqDouble";
import ContactCTA from "@/components/sections/contact/ContactCTA";
import FooterBaseCard from "@/components/sections/footer/FooterBaseCard";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import { Bot, Brain, Sparkles, User, Wand2, Database, Film, Settings, Send, CheckCircle, Zap, MessageSquare, CreditCard, Star, HelpCircle, Mail, GitBranch, Lock, Eye, Languages, Users } from "lucide-react";

export default function AIAgentsTemplatePage() {
    const navItems = [
        { name: "Features", id: "features" },
        { name: "Pricing", id: "pricing" },
        { name: "Docs", id: "docs" },
        { name: "Contact", id: "contact" },
    ];

    const features: FeatureCard[] = [
        {
            bentoComponent: "3d-task-list",            title: "Smart Animation",            items: [
                { icon: Wand2, label: "Character rigging", time: "Done" },
                { icon: Film, label: "Scene composition", time: "Done" },
                { icon: CheckCircle, label: "Lip-sync accuracy", time: "Done" },
                { icon: Send, label: "Rendering finished", time: "Just now" },
            ],
            description: "Our AI engine preserves character identity across every frame while automating cinematic movement."},
        {
            bentoComponent: "chat",            aiIcon: Bot,
            userIcon: User,
            exchanges: [
                { userMessage: "Animate character walking in rain", aiResponse: "Generating scene with cinematic rainfall and emotional depth." },
                { userMessage: "Change style to 3D Pixar", aiResponse: "Style updated. Rendering scene in high-quality 3D." },
            ],
            placeholder: "Describe your scene...",            title: "Prompt-to-Video",            description: "Transform simple text prompts into fully realized animated sequences with natural voiceover."},
        {
            bentoComponent: "3d-card-grid",            items: [
                { name: "Music", icon: Zap },
                { name: "Voice", icon: MessageSquare },
                { name: "Styles", icon: Layers },
                { name: "Cloud", icon: Database },
            ],
            centerIcon: Brain,
            title: "Studio Suite",            description: "Comprehensive post-production tools including auto-generated music, sound effects, and volume balancing."},
    ];

    const testimonials = [
        { id: "1", name: "Alice Morgan", handle: "Lead Animator", testimonial: "The character consistency feature is a game-changer. My characters stay identical throughout the entire film.", imageSrc: "http://img.b2bpic.net/free-photo/letter-e-made-green-grass-with-flowers-isolated-white_169016-57073.jpg" },
        { id: "2", name: "John Davis", handle: "Indie Creator", testimonial: "From prompt to 4K render in minutes. The quality is honestly better than what I could do manually.", imageSrc: "http://img.b2bpic.net/free-photo/letter-r-made-green-grass-with-flowers-isolated-white_169016-57394.jpg" },
        { id: "3", name: "Elena Rossi", handle: "Studio Founder", testimonial: "The multi-character interaction is flawless. Finally, a tool that handles group scenes with ease.", imageSrc: "http://img.b2bpic.net/free-photo/dripping-paint-letter-y_23-2148185136.jpg" },
        { id: "4", name: "Kai Chen", handle: "Content Creator", testimonial: "The AI voice quality is astonishingly natural. The lip-sync matches perfectly every single time.", imageSrc: "http://img.b2bpic.net/free-photo/hand-holding-letter-o_53876-63768.jpg" },
        { id: "5", name: "Sarah West", handle: "Educator", testimonial: "Perfect for my classroom stories. The kids love the cartoon style and I love how fast it renders.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=vyicwr" },
        { id: "6", name: "Marcus Reed", handle: "Freelancer", testimonial: "Optimized for TikTok and YouTube exports. My workflow has become ten times faster with this tool.", imageSrc: "http://img.b2bpic.net/free-photo/letter-d-made-grass-with-yellow-flowers-isolated-transparent-background_169016-59669.jpg" },
    ];

    const pricingPlans = [
        { id: "starter", price: "$49/mo", name: "Creator", buttons: [{ text: "Get Started", href: "#" }], features: ["10 videos/mo", "1080p Export", "Basic Styles", "Standard AI Voices", "Community Support"] },
        { id: "pro", price: "$149/mo", name: "Professional", buttons: [{ text: "Get Started", href: "#" }], features: ["Unlimited videos", "4K Export", "Advanced 3D Styles", "Multi-character support", "Commercial Rights"] },
        { id: "business", badge: "Best Value", badgeIcon: Star, price: "$399/mo", name: "Studio", buttons: [{ text: "Get Started", href: "#" }], features: ["Collaboration Mode", "Team Cloud Storage", "Custom Voice Cloning", "Priority Rendering", "Dedicated Manager"] },
        { id: "enterprise", price: "Custom", name: "Agency", buttons: [{ text: "Contact Sales", href: "#" }], features: ["API Access", "Unlimited Teams", "White Labeling", "On-Premise Deployment", "24/7 Priority Support"] },
    ];

    const faqs = [
        { id: "1", title: "Can I upload my own character images?", content: "Absolutely. Upload your character illustrations or photos, and our AI will rig and animate them while maintaining identity consistency." },
        { id: "2", title: "How does the lip-sync work?", content: "Our engine analyzes the dialogue audio (generated or uploaded) and maps it precisely to your character's mouth movements for perfect synchronization." },
        { id: "3", title: "What export formats are supported?", content: "We support 1080p and 4K exports in MP4 and MOV formats, optimized for seamless sharing on YouTube, TikTok, and Instagram." },
        { id: "4", title: "Can I change the animation style?", content: "Yes, choose from a wide range of styles including 2D animation, Pixar-style 3D, anime, and conceptual art. You can even create custom style templates." },
        { id: "5", title: "Does it generate sound and music?", content: "Yes, the app generates background music based on your prompt's mood and adds sound effects automatically, with full control over audio mixing." },
        { id: "6", title: "Is collaboration available?", content: "Our Studio and Agency plans include team workspaces, allowing multiple users to edit scenes simultaneously in a shared project." },
    ];

    const footerColumns = [
        { title: "Product", items: [{ label: "Features", href: "#features" }, { label: "Pricing", href: "#pricing" }, { label: "Templates", href: "#" }, { label: "Styles", href: "#" }] },
        { title: "Resources", items: [{ label: "Tutorials", href: "#" }, { label: "Guides", href: "#" }, { label: "Community", href: "#" }, { label: "Blog", href: "#" }] },
        { title: "Company", items: [{ label: "About", href: "#" }, { label: "Careers", href: "#" }, { label: "Contact", href: "#contact" }, { label: "Legal", href: "#" }] },
    ];

    return (
        <ThemeProvider defaultButtonVariant="icon-arrow" defaultTextAnimation="background-highlight" borderRadius="rounded" contentWidth="medium" sizing="medium" background="none" cardStyle="gradient-bordered" primaryButtonStyle="gradient" secondaryButtonStyle="layered" headingFontWeight="semibold">
            <NavbarStyleFullscreen navItems={navItems} brandName="AnimAI" bottomLeftText="Creative Studio" bottomRightText="hello@animai.studio" />
            <HeroBillboardDashboard background={{ variant: "canvas-reveal" }} tag="AI Animation Studio" tagIcon={Film} title="Cinematic Animation, Powered by AI" description="Turn your characters and text prompts into high-fidelity animated videos instantly. Designed for creators, studios, and visionaries." buttons={[{ text: "Launch App", href: "#" }, { text: "View Gallery", href: "#" }]} dashboard={{ title: "AnimAI Editor", logoIcon: Film, imageSrc: "http://img.b2bpic.net/free-photo/letter-d-made-green-grass-with-flowers-isolated-white_169016-57152.jpg", imageAlt: "Creative Editor", buttons: [{ text: "Create Scene", href: "#" }, { text: "Export Video", href: "#" }], sidebarItems: [{ icon: Wand2, active: true }, { icon: Languages }, { icon: Film }, { icon: Users }, { icon: Settings }], stats: [{ title: "Active Projects", values: [120, 145, 138], description: "Ongoing animation projects in your workspace." }, { title: "Minutes Rendered", values: [4500, 5200, 4800], description: "Total duration of videos generated this month." }, { title: "Export Speed", values: [98, 95, 99], valueSuffix: "ms", description: "Average time to process a 10s animated segment." }], chartTitle: "Render Usage (24h)", chartData: [{ value: 40 }, { value: 65 }, { value: 50 }, { value: 80 }, { value: 70 }, { value: 95 }, { value: 85 }, { value: 60 }], listTitle: "Recent Renders", listItems: [{ icon: CheckCircle, title: "Kids Series Ep 01", status: "Ready" }, { icon: Film, title: "Brand Commercial", status: "Processing" }, { icon: Wand2, title: "Fantasy Scene", status: "Finished" }] }} />
            <div id="features"><FeatureBento features={features} animationType="slide-up" tag="Features" tagIcon={Sparkles} title="Professional Tools for Every Creator" description="Built-in AI animation, voice acting, and sound engineering in one cohesive interface." textboxLayout="default" useInvertedBackground={false} /></div>
            <FeatureHoverPattern animationType="slide-up" tag="Advanced Engine" tagIcon={Layers} title="Engineered for Visual Consistency" description="We ensure your vision remains intact from scene one to the finale with industry-leading AI models." textboxLayout="default" useInvertedBackground={false} features={[{ icon: GitBranch, title: "Identity Preserving", description: "Our AI ensures your characters maintain consistent features, clothing, and proportions across all scenes." }, { icon: Shield, title: "Stable Performance", description: "Zero-glitch rendering process ensures high-quality output without visual artifacts or deformities." }, { icon: Eye, title: "Smart Camera", description: "Advanced camera composition with automatic zooms, pans, and cinematic cuts inspired by real films." }, { icon: Lock, title: "Style Control", description: "Lock in your preferred style (Pixar, Anime, 2D) to ensure the entire story matches your chosen aesthetic." }]} />
            <MetricSplitMediaAbout tag="Why AnimAI" tagIcon={Zap} title="The Future of Animated Content Creation" description="AnimAI streamlines the entire production pipeline. From automated lip-sync to background music generation, we eliminate the bottlenecks of manual animation so you can focus purely on your storytelling." metrics={[{ value: "10x", title: "Faster Workflows" }, { value: "4K", title: "Native Support" }]} imageSrc="http://img.b2bpic.net/free-photo/top-view-sauerkraut-with-tomato-n-pink-plate_114579-82867.jpg" imageAlt="Animation Workspace" mediaAnimation="slide-up" metricsAnimation="slide-up" useInvertedBackground={false} />
            <TestimonialCardSix testimonials={testimonials} animationType="slide-up" tag="Community" tagIcon={MessageSquare} title="Loved by Creators Globally" description="Join a community of professionals who have shifted their animation production to the AnimAI platform." textboxLayout="default" useInvertedBackground={false} />
            <div id="pricing"><PricingCardThree plans={pricingPlans} animationType="slide-up" tag="Pricing" tagIcon={CreditCard} title="Flexible Plans for Every Stage" description="Start for free and scale as your animation production grows. No hidden costs, just high-quality results." textboxLayout="default" useInvertedBackground={false} /></div>
            <FaqDouble faqs={faqs} tag="FAQ" tagIcon={HelpCircle} title="Answers to Your Questions" description="Everything you need to know about starting your animated masterpiece with AnimAI." textboxLayout="default" faqsAnimation="slide-up" useInvertedBackground={false} />
            <div id="contact"><ContactCTA tag="Get Started" tagIcon={Mail} title="Bring Your Story to Life Today" description="Join thousands of creators using AnimAI to build cinematic animated content. Sign up today and render your first project." buttons={[{ text: "Start Free Trial", href: "#" }, { text: "Talk to Sales", href: "#" }]} background={{ variant: "canvas-reveal" }} useInvertedBackground={false} /></div>
            <FooterBaseCard logoText="AnimAI" columns={footerColumns} copyrightText="© 2025 AnimAI. All rights reserved." />
        </ThemeProvider>
    );
}