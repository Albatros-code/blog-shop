import type { NextPage } from 'next'
import { navigation } from '../../../config'
import Layout from '../../components/layout/Layout'
import { setThemeVariable } from '../../utils/theme/Theme'

import styles from './SettingsPageContent.module.css'

const colors = ['pink','red', 'yellow', 'green', 'orange']
const fonts = ['Roboto','Monteserrat', 'Lato', 'Merriweather', 'Arial', 'Tahoma']

const SettingsPageContent: NextPage = () => {

  return (
    <Layout activeLink={navigation.settings.link}>
      <div >
        <h1 className={styles.title}>Settings</h1>
        {[
          {param: 'col.primary', options: colors},
          {param: 'col.secondary', options: colors},
          {param: 'text.fontfamily', options: fonts},
        ].map(props => <SelectThemeProperty key={props.param} {...props} className={'mb'}/>)}
      </div>
    </Layout>
  )
}

export default SettingsPageContent

interface SelectThemePropertyProps {
  param: string
  options: string[]
  label?: string

  className?: string
}

const SelectThemeProperty = ({
  param,
  options,
  label,
  className
}: SelectThemePropertyProps) =>         
  <div className={[styles.themeSettingItem, className].join(' ')}>
    <p className={styles.themeSettingItemTitle}>{label || param}</p>
    <select name={param} id="primary" onChange={(e) => {setThemeVariable(e.target.name, e.target.value)}}>
      {options.map(el => <option key={el} value={el}>{el}</option>)}
    </select>
  </div>
