import { CheckCircle, Clock, Star, Users } from "lucide-react";

export const services = [
    {
        title: "Home Deep Cleaning",
        slug: "home-deep-cleaning",
        description: "A comprehensive cleaning service that covers every corner of your home, ensuring a pristine and healthy environment.",
        icon: "Home",
        details: [
            "Dusting and wiping all surfaces",
            "Vacuuming and mopping floors",
            "Kitchen deep cleaning (appliances, cabinets)",
            "Bathroom sanitization (toilet, shower, sink)",
            "Window sill and frame cleaning",
            "Cobweb removal"
        ]
    },
    {
        title: "Office Deep Cleaning",
        slug: "office-deep-cleaning",
        description: "Professional cleaning services for offices to maintain a productive and hygienic workspace.",
        icon: "Briefcase",
        details: [
            "Workstation cleaning and sanitization",
            "Reception area detailing",
            "Conference room cleaning",
            "Kitchen and breakroom cleaning",
            "Trash removal and recycling",
            "Floor care (vacuuming, mopping)"
        ]
    },
    {
        title: "Carpet and Upholstery",
        slug: "carpet-and-upholstery",
        description: "Revitalize your carpets and furniture with our deep steam cleaning and stain removal services.",
        icon: "Sofa",
        details: [
            "Hot water extraction",
            "Stain and spot removal",
            "Odor neutralization",
            "Fabric protection treatment",
            "Upholstery refreshing",
            "Quick drying techniques"
        ]
    },
    {
        title: "Window Cleaning",
        slug: "window-cleaning",
        description: "Crystal clear windows for your home or office, inside and out.",
        icon: "Inspect",
        details: [
            "Interior and exterior glass cleaning",
            "Screen cleaning",
            "Track and sill detailing",
            "Hard water stain removal",
            "Streak-free finish",
            "Skylight cleaning"
        ]
    },
    {
        title: "Post Construction",
        slug: "post-construction",
        description: "Thorough cleaning to remove dust and debris after renovation or construction work.",
        icon: "HardHat",
        details: [
            "Fine dust removal from all surfaces",
            "Paint splatter removal",
            "Label and sticker removal",
            "Floor scrubbing and polishing",
            "Ventilation vent cleaning",
            "Debris disposal"
        ]
    },
    {
        title: "Move In / Move Out",
        slug: "move-in-move-out",
        description: "Ensure the property is spotless for the next refined chapter of your life.",
        icon: "Truck",
        details: [
            "Deep cleaning of empty spaces",
            "Inside cabinet and drawer cleaning",
            "Appliance deep cleaning (oven, fridge)",
            "Baseboard and door frame detailing",
            "Bathroom and kitchen sanitization",
            "Wall spot cleaning"
        ]
    }
];

export const features = [
    {
        title: "Experienced Professionals",
        description: "Our team consists of trained, background-checked professionals with years of experience in deep cleaning services.",
        icon: Users
    },
    {
        title: "Premium Quality",
        description: "We use only eco-friendly, professional-grade cleaning products and equipment to ensure the best results.",
        icon: Star
    },
    {
        title: "Satisfaction Guaranteed",
        description: "Your satisfaction is our priority. We offer a 100% satisfaction guarantee on all our cleaning services.",
        icon: CheckCircle
    },
    {
        title: "Timely Service",
        description: "We respect your time and ensure our services are completed within the promised timeframe with minimal disruption.",
        icon: Clock
    }
];

export const faqs = [
    {
        question: "Do I need to be home during the cleaning?",
        answer: "No, you don't need to be home. Many of our clients provide us with a key or entry code. However, you are welcome to stay if you prefer."
    },
    {
        question: "Are your cleaning products safe for pets?",
        answer: "Yes! We prioritize the safety of your family and pets. We use eco-friendly and non-toxic cleaning products."
    },
    {
        question: "How do I book a service?",
        answer: "You can book directly through our website by clicking the 'Book Now' button or by giving us a call."
    },
    {
        question: "What if I'm not satisfied with the cleaning?",
        answer: "Customer satisfaction is our priority. If you're not happy with any aspect of our service, please contact us within 24 hours and we will address the issue promptly."
    }
];
