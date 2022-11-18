import React from "react";

function Credits () {
    return (
        <div 
            className="mt-10">
            <p
                className="text-3xl font-bold">
                Credits
            </p>
            <div
                className="mt-6 text-gray-600 ">
                <ul
                    className="mt-3 list-disc mx-5">
                    <li 
                        className="mb-1">
                        <a 
                            className="underline"
                            target={"_blank"}
                            rel="noreferrer"
                            href="https://thenumbat.github.io/">
                            Inspiration
                        </a> for website design
                    </li>
                    <li
                        className="mb-1">
                        <a 
                            className="underline"
                            target={"_blank"}
                            rel="noreferrer"
                            href="https://www.youtube.com/watch?v=zdGZ-NdhDuo&list=PLPxc0y7j97c5U1DHWDr4ZDKRgu8wlKdsi&index=22&t=2110s">
                            Inspiration
                        </a> for footer design
                    </li>
                    <li
                        className="mb-1">
                        <a 
                            className="underline"
                            target={"_blank"}
                            rel="noreferrer"
                            href="https://betterprogramming.pub/how-to-host-your-react-app-on-github-pages-for-free-919ad201a4cb">
                            Guide 
                        </a> to deploy react app on GitHub Pages
                    </li>
                    <li
                        className="mb-1">
                        <a 
                            href="https://unsplash.com/@alexbemore?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                            YouTube Photo by <span className="underline">Alexander Shatov</span> on 
                        </a>  
                        <a 
                            className="underline"
                            href="https://unsplash.com/s/photos/youtube?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                            Unsplash
                        </a>
                    </li>

                    <li
                        className="mb-1">
                        <a 
                            href="https://unsplash.com/@alexbemore?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                            Discord Photo by <span className="underline">Alexander Shatov</span> on 
                        </a>
                        <a 
                            className="underline"
                            href="https://unsplash.com/s/photos/discord?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                            Unsplash
                        </a>
                    </li>
                    <li
                        className="mb-1">
                        <a 
                            href="https://unsplash.com/@alexbemore?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                            Spotify Photo by <span className="underline">Alexander Shatov</span> on </a>
                        <a 
                            className="underline"
                            href="https://unsplash.com/s/photos/spotify?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                            Unsplash
                        </a>
                    </li>
                    <li
                        className="mb-1">
                        <a 
                            href="https://unsplash.com/es/@sunder_2k25?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                            WazirX Photo by <span className="underline">Sunder Muthukumaran</span> on </a>
                        <a 
                            className="underline"
                            href="https://unsplash.com/s/photos/wazirX?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                            Unsplash
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Credits;