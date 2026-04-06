export interface NavLink {
    href: string;
    label: string;
}

export interface NavDropdown {
    label: string;
    items: NavLink[];
}

export type NavItem = NavLink | NavDropdown;

export function isDropdown(item: NavItem): item is NavDropdown {
    return "items" in item;
}

export const navigationItems: NavItem[] = [
    { href: "/", label: "Inicio" },
    {
        label: "Sobre Betsubara",
        items: [
            { href: "/el-dojo", label: "El dojo" },
            { href: "/nuestra-historia", label: "Nuestra historia" },
        ],
    },
    {
        label: "Disciplinas",
        items: [
            { href: "/disciplinas/abordaje-corporal", label: "Abordaje corporal" },
            { href: "/disciplinas/aikido", label: "Aikido" },
            { href: "/disciplinas/ashtanga-yoga", label: "Ashtanga yoga" },
            { href: "/disciplinas/entrenamiento-corporal-integral", label: "Entrenamiento corporal integral" },
            { href: "/disciplinas/jiu-jitsu-brasilero", label: "Jiu Jitsu brasilero" },
            { href: "/disciplinas/karate-shorin-ryu", label: "Karate shorin ryu" },
            { href: "/disciplinas/kung-fu", label: "Kung fu" },
            { href: "/disciplinas/pakua", label: "Pakua" },
            { href: "/disciplinas/taekwondo", label: "Taekwondo" },
            { href: "/disciplinas/taichi", label: "Taichi" },
            { href: "/disciplinas/vinyasa-yoga", label: "Vinyasa Yoga" },
        ],
    },
    { href: "/horarios", label: "Horarios" },
    { href: "/contacto", label: "Contacto" },
];
