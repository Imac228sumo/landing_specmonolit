'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import Script from 'next/script'
import { useEffect } from 'react'

declare function ym(
	id: number,
	action: string,
	url?: string,
	options?: any
): void

export const enableYM = process.env.REACT_APP_YANDEX_METRIKA_ID

export function Metrika() {
	const pathName = usePathname()
	const searchParams = useSearchParams()
	useEffect(() => {
		ym(Number(enableYM) || 96918578, 'hit', window.location.href)
	}, [pathName, searchParams])
	return (
		<Script id='yandex-metrika'>
			{`
        (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();
        for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
        (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

        ym(${Number(enableYM) || 96918578}, "init", {
          defer: true,
          clickmap:true,
          trackLinks:true,
          accurateTrackBounce:true
        });    
      `}
		</Script>
	)
}
