import { Link } from 'react-router-dom';
import './first.css';

const FirstPage=()=>{
    return(
        <body>
    <div className="main-container">
        <div>
            <div className="icon-div">
                <i className="fa-brands fa-spotify spotify-icon"></i>
                <h3 className="spotify-heading">Spotify</h3>
            </div>
            <div className="profile">
                <img src="https://s3-alpha-sig.figma.com/img/4b1c/9272/23674d7d0fc7e5938c32787f13738353?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bJr0XftU7G3snbRBEd~-06tzGzFoEG2soivQVNDHhE00UgREvKys4qlKBKQ9~iBYwKyAF-j8nUfBqPoCB2qMY7Xz45oZoN6UOync3QBacPI2tAhqplC67ka92LaZatAeIoY~hrQfIPb6Ynf4mwI7MyFMFWrgOt5hNTU7ifYenU49tC-dhJVTOOBkV-s8X2fzHFOgX6sK1mce3lecnHJOGPOtBdYlZ49wgg3N7wu5Cmf0ff-CfHIiVFPcJl7~U9bQCjRhnkzAhz44l6WgFZg~bB2w01rWsUnuW6wBpIRN0a269EBzAGPMPq5msRv~9V5SK1FOEXVn85Obyvq6mDtnpg__"
                className="image-icon" alt="page-image" />
            </div>
        </div>


        <div className="second-division-container">
            <div className="second-sub-div1">
                <div className="for-you-div">
                    <h2 className="for-you-text">For You</h2>
                </div>
                <div className="top-tracks-div">
                    <h2 className="top-tricks-text">Top Tracks</h2>
                </div>
            </div>
            
            <div className="search-bar">
                <div className="input-content">
                    <input type="text" className="input-text" placeholder="Search Song, Artist" />
                </div>
                <div className="search-icon">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>
            </div>



            <div className="second-sub-div2">
                <div className="box1">
                    <div className="leftdiv">
                        <div className="icons">
                            <img src="https://s3-alpha-sig.figma.com/img/fe5e/cae2/286ace9b7f11221e08907b8be5baedd9?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UFqohsO1tEMfYTRvvC3e7Mr2q8iSTyaVFRsosXBPUcyVLJjAGHCq9yPh2nFpVYqHDTW4oAKyGmZYG~w0Cza6Bs5KTLXtC4yaEA0Lxz0g3UbR2ElG-EN9-aqgKtxsJPRWl7SGJU3MR4MjDcNxMp8AFuhm7DLZKVYNC5xdxOSueGWWrPd9CU2Q8ieLA2QB3v46edgNJv1UAc5rVzSwNBPAdxL1D7ahRe0boAfQv~r4pUUN5zKFMe3-EXZWnkajt3Tf7hraInQJdh6VixMcgw6-nB3uRkRcGl0z-DJnawnPCUafphgc6l1Xwk3ZGzwfUAsGt7-xl8b-0mzJZnDVgS9XOg__"
                            className="image-1" alt="image-page"/>
                        </div>
                        <div className="song-names">
                            <h5>Starboy</h5>
                            <p>The Weeknd</p>
                        </div>
                    </div>
                    <div className="time">
                        <p>4:16</p>
                    </div>
                </div>
            </div>

            <div className="second-sub-div2">
                <div className="box1">
                    <div className="leftdiv">
                        <div className="icons">
                            <img src="https://s3-alpha-sig.figma.com/img/8f85/c5c4/c8dee74064a79f73f52035bd09fdff90?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ay~DfPJCdk2bia5ZQSnyVyWPUGrtQ~PuywYJEM3p04~EtVXgw9v2cu9Oa9eBBTyh1rIGbmx5APWieDvcBvUgyUxmAx8kxmEYqrnKAdyvclllrb9rtbDZPqpOpEWUeoTitqMnvQx8Xn4Y1vZjZYoudFLfaaJiVdz0WKfl4Ws48R08mKGY1Oa9BpumLWHqMwkWhIPa74G~JAW2rGNwS6znngWodhIFe4GW4U32Q3MqmRpFn5bfCkxc~xfyJBbMs3LXcWxu3Ed5gWfRDwSQ8F5yFA-5YkCy4IVAk-MeNzq69ipmnCfw9S3pm~qIVFgGrAm6GWggqYC7ZjeiSTV83sGveA__"
                            className="image-1" alt="image-page"/>
                        </div>
                        <div className="song-names">
                            <h5>Demons</h5>
                            <p>Imagine Dragons</p>
                        </div>
                    </div>
                    <div className="time">
                        <p>5:24</p>
                    </div>
                </div>
            </div>

            <div className="second-sub-div2">
                <div className="box1">
                    <div className="leftdiv">
                        <div className="icons">
                            <img src="https://s3-alpha-sig.figma.com/img/d1fa/9a26/7f9e4ba2e23255152cbf104b2d421838?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AP~q0uv7bdtxK~8314nWvuWFbU5TTzQKKmonVh7Ri~gOqNuByXGNBMIIke5VCopgn1aAGfl8MCwYqBELgbKJu25lnQm6mCg4cxm3CjZY8pr90zqURCo8oo6bHMy5OuwJPIgD4PHOnxM19VBil9x09plC-FC2xKOvXFGBExta5A3Zg0-RHf2xky0sg2AVcH9-Khtgmgf61Unh0MsFfHi49Mj4dCi9K5~CHZBFSXp~vc7s8p8EHUtP6tJqNglZVkIbTIYZ0zW3FPIj--Szp6KvqG8hz6s0~k-2RFzpu2qtUoP0s1-ZfdjeNqc2-9GuY9mT4Aajnyw2FFL1MLHv8VLAuw__"
                            className="image-1" alt="image-page"/>
                        </div>
                        <div className="song-names">
                            <h5>Mouth of the river</h5>
                            <p>Imagine Dragons</p>
                        </div>
                    </div>
                    <div className="time">
                        <p>6:23</p>
                    </div>
                </div>
            </div>

            <div className="second-sub-div2">
                <div className="box1">
                    <div className="leftdiv">
                        <div className="icons">
                            <img src="https://s3-alpha-sig.figma.com/img/cd3c/4bfe/f0f62f5d30e186a4341cc9c0660b4cb4?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D5~TdxtFolOXiQwBm9z0bUtsaZB1YO9p-WDxVz23efF4mvosCNegQOEjoHAvvYFb6MUYm2YgANrzJBbq1v2NYooQ3UFVCK3YtujfVBfA35DXt-Kbz5m9bQeOZJwS2PLRnG9UO~B9AcMwyz2rPEVsBeUXwOxsg1L7N3Ea2DKOVBKkb3tvZLuwrBufcnyEfpJut8JV-f3R2BzVbIoc3Jghz99PnIaQpNuz0MX70FwP4PpMB4cD2WhUskExurtGrF0nqQQiWgJA79l6Mg3s5UPAcpNV87wisDgQ0nBgiyTP2DdUTSGfqacWr~LtGJxeQBFyJHwIsSiKAowj-ipxVdTg7g__"
                            className="image-1" alt="image-page"/>
                        </div>
                        <div className="song-names">
                            <h5>Ghost Stories</h5>
                            <p>Codplay</p>
                        </div>
                    </div>
                    <div className="time">
                        <p>3:10</p>
                    </div>
                </div>
            </div>

            <div className="second-sub-div2">
                <div className="box1">
                    <div className="leftdiv">
                        <div className="icons">
                            <img src="https://s3-alpha-sig.figma.com/img/1939/47a0/9f72631f7b804d04065837e855dd62e7?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mchNbgSamrCiOeDUhE3YcAbxahvaAou9NvcF3fyuJ7VqEJ8Lvsjp3CWQEAWd3DWVGg7QaTUztc-uJujdu0EqrnNJeSEIhh3HaI6~YkFgx8tnklTMv07cjrp7FoBjLtdYh5ypUn1QKqxL0rGcDtEPAITII4wRHPHCOfRBtGjOHAhO--YzmePAGuIRXLNo4NIx5k~kopqOi5tZDYk4fF~EcjVuCdP1L1NSv6RvvROidHEP-82Sm6cdlkwqwbaH5eUbPGlkMtE8e89Ygq0JdWxMNylFSGjHKuq0eYkE4FC-T6kSdSJ5Z1nbzc2a99kDY9RYTD9WZsKncm~0dYzILWqgnw__"
                            className="image-1" alt="image-page"/>
                        </div>
                        <div className="song-names">
                            <h5>Sparks</h5>
                            <p>Codplay</p>
                        </div>
                    </div>
                    <div className="time">
                        <p>4:23</p>
                    </div>
                </div>
            </div>

            <div  id="viva-la-vida" className="second-sub-div2">
                <div className="box1">
                    <div className="leftdiv">
                        <div className="icons">
                            <img src="https://s3-alpha-sig.figma.com/img/6885/45f9/4de3a425a36ffeb6fb1d0f22051a19cb?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IT8QNL6vuYULQ10CVRCrNREILLTTSOv8nOiLKA~a1fRJnrhN1TZ3DzfWu3-VZMyrkj3ychpc0DbyppA7P00EuwrI0xAdmxy5hfhWCxA1XfVl-D7b6L64WYLkA-5lJf5TbFEbcqqbWJHSdWLbw9JY8wtCp65EkH28zfeGnf4y6tyIG~oZa8RL0UswBaxi9F8Qos0kpytGmx61Fcv9-NlW6pljC-UxpuB7k0mDlC89DX6fNnOWpoF5ev5AhELUNiAkK~X67BwhSxQODHXV6ZetGFzGOMiqJSRRST4zIy41YiPVctwsPZsc0vCAytBw2r3UZoVSOc-g3HKDlY0yVBJzHA__"
                            className="image-1" alt="image-page"/>
                        </div>
                        <div className="song-names">
                            <h5>Viva La Vida</h5>
                            <p>Codplay</p>
                        </div>
                    </div>
                    <div className="time">
                        <p>5:32</p>
                    </div>
                </div>
            </div>

            <div className="second-sub-div2">
                <div className="box1">
                    <div className="leftdiv">
                        <div className="icons">
                            <img src="https://s3-alpha-sig.figma.com/img/fbe0/1e18/25357f2f4e220a29663eada48121c417?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e0DoQ~4POdy5jN2S4BolX7dAIDjIDduX~X39lHX2pu1BBXUuR6TYOtrp143aY3LqoCOI5K7dDdRUu3E3ESWfFoHtxhwa~aRbOayat9bo5KeMAfV~CFENwZx3~-8uvLkOfwikXHeqETMXXxyHGQwkTDirK3S3t4mD7eVO4pqdGUUQePSUbjjGWYFZUzx2NKAzGIQpKZjDFB7wJ90mdAD2DjrcoJHdGLvF9pQT8S05Ejc1J-6ARMVtarRPXfCGyqRMiOest2OJx82K~NGXjolv9J~VPPUN8n0YkpABRdxZUYabHApe1yKEzo3SPpYN1p21rE6H4mDquQdF6-GshmcBMA__"
                            className="image-1" alt="image-page"/>
                        </div>
                        <div className="song-names">
                            <h5>Hymn for the weekend</h5>
                            <p>Codplay</p>
                        </div>
                    </div>
                    <div className="time">
                        <p>2:23</p>
                    </div>
                </div>
            </div>

            <div className="second-sub-div2">
                <div className="box1">
                    <div className="leftdiv">
                        <div className="icons">
                            <img src="https://s3-alpha-sig.figma.com/img/9e7b/90e9/d5d9d8e411f9cb709c6cb000fe09f4e7?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QtNyxdCpD3h6ttLFNHEKKte3RLgwwxjnxYvTLzJ8s9e0-NzcseI9-9H5K3xXfI2hpjgHW0o-Zu7MYiNCrPM~LoJFYe52uIhl3yobhia0aoPm8YyDEwbqQ7v7ox4rnt6XMYbSZnuZSf6ohqFi7djugAyASdNMtWqRKXGO9l207f2of6YnSFO0ec0~MG5Fx9g2JQRokTzFXsvmTvzm56qZfx2UROiMIFyh0lvqN0w-D7n88OxcA4bjr61ae6SDWIoBR6WJspsZyDorA2qfte5ngDZw4Ux~78osQyD4dbX2opkY2fY5hjh3ydGnVdQ3BkOv4TYD6CGaKxNjvNTWLzGL2w__"
                            className="image-1" alt="image-page"/>
                        </div>
                        <div className="song-names">
                            <h5>Pain</h5>
                            <p>Ryan Jones</p>
                        </div>
                    </div>
                    <div className="time">
                        <p>3:12</p>
                    </div>
                </div>
            </div>

            <div className="second-sub-div2">
                <div className="box1">
                    <div className="leftdiv">
                        <div className="icons">
                            <img src="https://s3-alpha-sig.figma.com/img/325b/a631/f064f94c7f42b5a5ea9ce8326bfd6b36?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=agGY0Gol9NFZiQM~sgpdC1qxJ5-3Y66jowPt~lYIRjMMpFVOhkMfLvA-A0vDCCzsx9c3vV7cmBH9cek1KNkYb6nA-rbWQTB-tagCTi~g8wBnRoldPSccyoiPQeNURt5prCPK4sNang1nN9fp-PIX8N8o2XG~Hmi7Pw7SxvwpjkOVw~JefvT1r46QxZUYFeo~UpeM7joZ357Pasi1U0HsN4g9u2QKfjfEozCgqg0AZ9q5qcG9WsXPbq-Rqhm5B3uu9kHqffKbAWj7ac~ckpPmVwO5vWHr388cOLhLxw4Hpoo74aNVquRENRHAYNrk3nDAawpBK3vCMbBqYcftFWYsyQ__"
                            className="image-1" alt=""/>
                        </div>
                        <div className="song-names">
                            <h5>Origin</h5>
                            <p>Imagine Dragons</p>
                        </div>
                    </div>
                    <div className="time">
                        <p>3:43</p>
                    </div>
                </div>
            </div>
        </div>



        <div className="song-play-section">
            <div className="about-song-div">
                <div className="song-display-heading">
                    <h3>Viva La Vida</h3>
                </div>
                <div className="song-display-para">
                    <p>Codplay</p>
                </div>
            </div>
            <div>
                <img src="https://s3-alpha-sig.figma.com/img/6885/45f9/4de3a425a36ffeb6fb1d0f22051a19cb?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IT8QNL6vuYULQ10CVRCrNREILLTTSOv8nOiLKA~a1fRJnrhN1TZ3DzfWu3-VZMyrkj3ychpc0DbyppA7P00EuwrI0xAdmxy5hfhWCxA1XfVl-D7b6L64WYLkA-5lJf5TbFEbcqqbWJHSdWLbw9JY8wtCp65EkH28zfeGnf4y6tyIG~oZa8RL0UswBaxi9F8Qos0kpytGmx61Fcv9-NlW6pljC-UxpuB7k0mDlC89DX6fNnOWpoF5ev5AhELUNiAkK~X67BwhSxQODHXV6ZetGFzGOMiqJSRRST4zIy41YiPVctwsPZsc0vCAytBw2r3UZoVSOc-g3HKDlY0yVBJzHA__"
                className="large-icon" alt=""/>
            </div>


            <hr/>

            <div className="play-section">
                <ul className="buttons">
                    <Link to="#" className="button1">
                        <i className="fa-solid fa-ellipsis"></i>
                        <span className="sr-only">ellipsis</span>
                    </Link>
                    <Link to="/previous-song" className="previous">
                        <i className="fa-solid fa-backward"></i>
                        <span className="sr-only">Previous Music</span>
                    </Link>
                    <Link to="#" className="play">
                        <i className="fa-solid fa-play"></i>
                        <span className="sr-only">Play</span>
                    </Link>
                    <Link to="/next-song" className="next">
                        <i className="fa-solid fa-forward"></i>
                        <span className="sr-only">Next Music</span>
                    </Link>
                    <Link to="#" className="sound">
                        <i className="fa-solid fa-volume-high"></i>
                        <span className="sr-only">volume</span>
                    </Link>
                </ul>
            </div>
        </div>
    </div>
</body>
    )
}

export default FirstPage;