import React, { useCallback } from 'react'
import useToggle from '../../hooks/useToggle'

export default ({ darkMode, setDarkMode }) => (
    <div className="flex h-full items-center justify-center">
        <button
            className="group"
            onClick={useCallback(() => {
                setDarkMode(!darkMode)
            }, [darkMode, setDarkMode])}
        >
            {darkMode && (
                <svg
                    className="w-6 text-white group-hover:text-yellow-200 sm:w-8"
                    viewBox="0 0 455 455"
                    fill="currentColor"
                >
                    <g>
                        <polygon
                            points="320.18,162.705 280.63,171.052 307.72,201.052 303.437,241.245 340.34,224.751 377.243,241.245 372.96,201.052 
		400.05,171.052 360.5,162.705 340.34,127.67 	"
                        />
                        <polygon
                            points="440,325.677 414.091,320.208 400.883,297.253 387.675,320.208 361.766,325.677 379.513,345.33 376.708,371.661 
		400.884,360.855 425.063,371.661 422.254,345.329 	"
                        />
                        <path
                            d="M218,227.5c0-89.167,51.306-166.338,126-203.64C313.443,8.6,278.978,0,242.5,0C116.855,0,15,101.855,15,227.5
		S116.855,455,242.5,455c36.478,0,70.943-8.6,101.5-23.86C269.306,393.838,218,316.667,218,227.5z"
                        />
                    </g>
                </svg>
            )}

            {!darkMode && (
                <svg
                    viewBox="0 0 512.004 512.004"
                    className="w-8 group-hover:text-orange-800 sm:w-10"
                    fill="currentColor"
                >
                    <g>
                        <g>
                            <rect
                                x="239.312"
                                y="69.57"
                                width="33.391"
                                height="89.042"
                            />
                        </g>
                    </g>
                    <g>
                        <g>
                            <rect
                                x="89.778"
                                y="131.509"
                                transform="matrix(0.7071 -0.7071 0.7071 0.7071 -93.2864 126.846)"
                                width="33.391"
                                height="89.041"
                            />
                        </g>
                    </g>
                    <g>
                        <g>
                            <rect
                                x="0.008"
                                y="308.871"
                                width="89.042"
                                height="33.391"
                            />
                        </g>
                    </g>
                    <g>
                        <g>
                            <rect y="409.044" width="512.004" height="33.391" />
                        </g>
                    </g>
                    <g>
                        <g>
                            <rect
                                x="422.962"
                                y="308.871"
                                width="89.041"
                                height="33.391"
                            />
                        </g>
                    </g>
                    <g>
                        <g>
                            <rect
                                x="361.014"
                                y="159.343"
                                transform="matrix(0.7071 -0.7071 0.7071 0.7071 -5.6994 338.3162)"
                                width="89.039"
                                height="33.391"
                            />
                        </g>
                    </g>
                    <g>
                        <g>
                            <path
                                d="M256.004,203.137c-67.618,0-122.433,54.816-122.433,122.433c0,20.04,4.816,38.954,13.352,55.651h218.163
			c8.536-16.698,13.352-35.611,13.352-55.651C378.438,257.952,323.622,203.137,256.004,203.137z"
                            />
                        </g>
                    </g>
                </svg>
            )}
        </button>
    </div>
)
