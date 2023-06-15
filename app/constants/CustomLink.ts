import { CiGlobe, CiLogout, CiSettings, CiShare1, CiUser } from 'react-icons/ci'
import { HiHome } from 'react-icons/hi'

export const menuLinks = [
	{ label: 'Ana Sayfa', url: '/', icon: HiHome },
	{ label: 'Hesap', url: '/', icon: CiShare1 },
	{ label: 'Premium', url: '/', icon: CiGlobe },
	{ label: 'Profil', url: '/', icon: CiUser },
	{ label: 'Ayarlar', url: '/', icon: CiSettings },
	{ label: 'Gizli Oturum', url: '/', icon: CiShare1 },
	{ label: 'Oturumu Kapat', url: '/', icon: CiLogout }
]
