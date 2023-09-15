import { container, colorContainer, codeContainer, predefinedColors } from './page.css'
import { ColorPicker } from '@/components'


export default function Home() {

  const colors = {
    primary:  "#690FAD",
    secondary: "#CAA8F5"
  }

  return (
    <main>
      <h2>Colors</h2>
      <div className={container}>
        <div className={`${colorContainer} ${predefinedColors.primaryDark}`}>
          <code className={codeContainer}>Primary dark</code>
        </div>
        <div className={`${colorContainer} ${predefinedColors.primaryDefault}`}>
          <ColorPicker color={colors} type='primary' />
          <code className={codeContainer}>Primary default</code>
        </div>
        <div className={`${colorContainer} ${predefinedColors.primaryLight}`}>
          <code className={codeContainer}>Primary light</code>
        </div>
        <div className={`${colorContainer} ${predefinedColors.primaryExtraLight}`}>
          <code className={codeContainer}>Primary extra light</code>
        </div>
        <div className={`${colorContainer} ${predefinedColors.primaryBg}`}>
          <code className={codeContainer}>Primary bg</code>
        </div>
      </div>
      <div className={container}>
        <div className={`${colorContainer} ${predefinedColors.secondaryDark}`}>
          <code className={codeContainer}>secondary dark</code>
        </div>
        <div className={`${colorContainer} ${predefinedColors.secondaryDefault}`}>
          <ColorPicker color={colors} type='secondary' />
          <code className={codeContainer}>secondary default</code>
        </div>
        <div className={`${colorContainer} ${predefinedColors.secondaryLight}`}>
          <code className={codeContainer}>secondary light</code>
        </div>
        <div className={`${colorContainer} ${predefinedColors.secondaryExtraLight}`}>
          <code className={codeContainer}>secondary extra light</code>
        </div>
        <div className={`${colorContainer} ${predefinedColors.secondaryBg}`}>
          <code className={codeContainer}>secondary bg</code>
        </div>
      </div>
    </main>
  )
}
