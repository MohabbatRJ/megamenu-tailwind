import { Link } from "react-router-dom"
import { links } from "./MyLinks"
import { useState } from "react"


function NavLinks() {
    const [heading, setHeading] = useState('');
    const [subHeading, setSubHeading] = useState("");
    return (
        <>
            {links.map((link) => (
                // eslint-disable-next-line react/jsx-key
                <div>
                    <div className="px-3 text-left group">
                        <h1 className="py-7 cursor-pointer flex justify-between items-center md:pr-0 pr-5" onClick={() => { heading !== link.name ? setHeading(link.name) : setHeading(""); setSubHeading(""); }}>{link.name}
                            <span className="text-xl md:hidden inline">
                                <ion-icon
                                    name={`${heading === link.name ? "chevron-up" : "chevron-down"
                                        }`}
                                ></ion-icon>
                            </span>
                            <span className="text-xl md:mt-1 md:ml-2  md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                                <ion-icon name="chevron-down"></ion-icon>
                            </span>
                        </h1>


                        {link.submenu && (
                            <div>
                                <div className="absolute top-20 hidden group-hover:md:block hover:md:block">
                                    <div className="py-3">
                                        <div className="bg-white absolute w-4 h-4 mt-1 left-3 rotate-45 "></div>
                                    </div>
                                    <div className="bg-white p-5 grid grid-cols-3 gap-10 ">
                                        {
                                            link.sublinks.map((mysublinks) => (
                                                // eslint-disable-next-line react/jsx-key
                                                <div className="">
                                                    <h1 className="text-base font-bold flex">{mysublinks.Head}
                                                        
                                                    </h1>
                                                    {
                                                        mysublinks.sublink.map((slink) => (
                                                            // eslint-disable-next-line react/jsx-key
                                                            <li className="text-sm text-gray-600 my-2.5">
                                                                <Link className="hover:text-blue-600" to={slink.link}>{slink.name}</Link>
                                                            </li>
                                                        ))
                                                    }
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>

                        )}
                    </div>

                    {/* mobile menu  */}
                    <div className={`${heading === link.name ? "md:hidden" : "hidden"} `}>
                        {link.submenu && (

                            <div>
                                {link.sublinks.map((slinks) => (
                                    // eslint-disable-next-line react/jsx-key
                                    <div className="">
                                        <div>
                                            <h1 onClick={() => subHeading !== slinks.Head ? setSubHeading(slinks.Head) : setSubHeading("")
                                            } className="py-4 pl-7 font-bold md:pr-0 pr-5 cursor-pointer hover:text-gray-500 flex justify-between items-center">{slinks.Head}
                                                <span className="text-xl md:mt-1 md:ml-2 inline">
                                                    <ion-icon
                                                        name={`${subHeading === slinks.Head
                                                            ? "chevron-up"
                                                            : "chevron-down"
                                                            }`}
                                                    ></ion-icon>
                                                </span>
                                            </h1>

                                            <div className={`${subHeading === slinks.Head ? "md:hidden " : "hidden" } `}>
                                                {

                                                    slinks.sublink.map((slink) => (
                                                        // eslint-disable-next-line react/jsx-key
                                                        <li className="py-3 pl-14 hover:text-blue-500">
                                                            <Link to={slink.link}>{slink.name}</Link>
                                                        </li>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            )
            )}

        </>
    )
}

export default NavLinks
