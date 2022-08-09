import React from 'react'

const ThemeContext = React.createContext<{theme: ThemeConfig} | undefined>(undefined)

export interface ThemeConfig {
    col: {
        primary: string
        secondary: string
    },
    text: {
        fontfamily: string
    }
}

interface ThemeProviderProps {
    children: React.ReactNode
    theme: ThemeConfig
}

type ObjWithNestedString = Record<string, string | unknown>
function objectToDots (obj: Record<string, string | unknown>) {
    const params: Array<[string, string]> = []
    function getParams(obj: ObjWithNestedString, path: string = ''){
        Object.entries(obj).forEach(([key, val]) => {
            if(typeof val === 'string') {
                params.push([path + key, val])
            } else {
                getParams(val as ObjWithNestedString, path + key + '.')
            }
        })
    }
    getParams(obj)
    return params
}

export function setThemeVariable(key: string, value: string){
    const variableName = '--' + key.replace('.', '-')
    const r = document.querySelector(':root') as HTMLElement
    if (r) r.style.setProperty(variableName, value)
}

const updateTheme = (theme: ThemeConfig, onFinish?: () => void) => {
    const params = objectToDots(theme as any)
    params.forEach(([key, val]) => {setThemeVariable(key, val)})
    onFinish && onFinish()
}

export const ThemeProvider = ({
    children,
    theme
}: ThemeProviderProps) => {

    const [loadingTheme, setLoadingTheme] = React.useState(false)

    // React.useEffect(() => {
    //     updateTheme(theme, () => {setLoadingTheme(false)})
    // }, [])

    return (
        <ThemeContext.Provider value={{theme}}>
            {!loadingTheme ? children : <div className='flex-row items-center justify-center'>Loading</div>}
        </ThemeContext.Provider>
    )
}