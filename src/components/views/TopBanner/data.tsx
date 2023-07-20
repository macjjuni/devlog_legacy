import SvgReact from '@/components/icons/ReactSvg'
import SvgVue from '@/components/icons/VueSvg'
import SvgJavascript from '@/components/icons/JavaScriptSvg'
import SvgTypescript from '@/components/icons/TypeScriptSvg'
import SvgBitcoin from '@/components/icons/BitcoinSvg'
import SvgGithub from '@/components/icons/GithubSvg'

export interface ILogo {
  name: string
  icon: JSX.Element
}

export const logos: ILogo[] = [
  {
    name: 'react',
    icon: <SvgReact width={24} height={24} />,
  },
  {
    name: 'vue',
    icon: <SvgVue width={24} height={24} />,
  },
  {
    name: 'javascript',
    icon: <SvgJavascript width={24} height={24} />,
  },
  {
    name: 'typescript',
    icon: <SvgTypescript width={24} height={24} />,
  },
  {
    name: 'git',
    icon: <SvgGithub width={24} height={24} />,
  },
  {
    name: 'bitcoin',
    icon: <SvgBitcoin width={24} height={24} />,
  },
]
