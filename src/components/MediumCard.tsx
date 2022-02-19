const Bedroom = () => <img
  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAABhElEQVR4nO3YvUrDUBjG8T9tHbp5Ad2cRLwIwa5Ozs4FVwcvxdtw8ANE3cTFtVvpUtDVSRSkDjEYknCanvSc1yTPDzI05OPJm/fkJAUREREREemifu53zyTFP3INXFmHiGmQ+71rksJQ51teBbAOYC3/DMgaA8drHu8NuAGevRMZm/8uAPfA0nO5BLZjBvfl6oB0eOxUPNYWsA+cAUck0+kB8OWdzkC2Ax5J7ua6+iQdsARON5QrmBAPwW9gQlKAkwDHr2NArutdQyB16HmyV2DPc99QbkluzDhd4SpAOnbvapzws8a+IRSeZ64CnAMv1BsmTzX2jaKsAEP+2v5hA+fwHUIhDIEP1wZz/Of+pizpLAeUd8A7cOGqUoNNVm2QfQ9oo8L1df5jSAWwDmBNBbAOYK1sGhwBs9hBIhkBi+wKdUDJugXV/wRpmsI7Tuc7QAWwDmBNBbAOYE0FsA5gTQWwDmBNBbAOYK3zBch/DE1NUsSz8vp6tLsr2n59IiIiIiJS0Q/FEHCS/I4dOQAAAABJRU5ErkJggg=="/>
const Bathroom = () => <img
  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAC3ElEQVR4nO2az27TQBDGf6mgvAESeYHyDKiIcqYCjnCAK6jqmfAEkMKD9AocKg6oaoBeeAGoBMc0lCNCCA5tOHhXcZ31esZZe2Oxn7Sq4p0/nz/PjLdpISEhISEhISEhIaFtHALTwvrQNole2wlzmJZcb5XTSpvJStAj4oNYBgGiIgkQm8ACuAOMgN9mHQC3u5TYTv6yzz7sMP8GsWtYg4sYIRPXFeCusfsLPAH6Zg3MtSkNVULoxHUFGBm7gWNvYPb2FTzECJ24rgC/jF3fsdc3ez8VPMQInXgpBOjiW+CT+fnAsfewYBMU+5S3wFOz904Rr24FbDKbRQPcs+iWgocYoRNLBegB28ARcJazq1pnwBdgC+VRu25CLQGpANsLcLBrSyNAiIQSAlIBjsz1e+ieZA+4b3w/K/xqJ9QSkApwaq7XGdgrxvdU47RIQg0BqQDF65v4Z01xXzpcSx32gLcK/z3gjYBAXQH+mFWG4v7CAtjPawLfNWYDsIpAXQGqbkhlrynzDYHNTUW8pYBGgBuBbJYeZSV0LPAd07EW0ASomgNXc3adEeCCJ5ALG2TnBBeaKv8JcAVYZ3YuOfHY/wAuF+zHmoQnZIqtA9c5XwG7Hr/dgu21nP93h730SQ0LcafACw+Plw77Zx57UYBXVM+BY2PzWkhYKsAq8JzZfJmStVsZ8q04Jrv5VY/9HC6Sffc3MQF2TABp710iu+GxiTHE3Wra3rY3NsF/RO8Zmyqh1NAOH228Kv/HVLehhW3HR1WGXfpGyA7ZkcDW2gQdzMUndMj5v+Y2XQF2xkjK2raL5OwiRhXhJgWQ9n8edmh6f4fpSgvY30MOkIv8vuDrRFcE0PS/RfA5ELMF8mcA7fKeArtSAd8W8P0aikTMCmiMR1cqoDEkAWITiI0kQGwCsZEEiE0gNrTfCcL8O1bz7pfEa5WHpgI+Cmw0/+zsiifxD80jISEhISEh4T/FPzmO2iejyFeMAAAAAElFTkSuQmCC"/>
const Shower = () => <img
  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAABmJLR0QA/wD/AP+gvaeTAAACTklEQVR4nO3bz2rUUBTH8a8iVehQ910LBRFBXVlwo0tFn8YiLqu1CkVfQJ9BwYUFN2rxHboQBHXcKbQ47nRc3HOZEKdp4Oae/JnfB0Ka5OaezGlyktxpQURERERERIKpTUctd8bJtg+g75TAREpgIiUwkRKYqEsJXAKeAN8L68p33zGwbW2l5DGzhB03PWrpGDttTEjO1Yo269Zm7HJENXTpEj60+YmKNnHbYUWbhXMe2AD2+b/mfQT2Cstx+z5w1/ZdWOvALvNrXLQHfCgsz2v7hurLfnBOA0+Bv4QE/ACeA7eBNWC5Yt9la3MHeGH7Tq2vHRbg7jwinFVTYAI8AFYS+lsBHgK/rc/3VP8Ceu0M4XKcAl+ASw32fQX4an2/I5zlg/OMWfJWM/S/yiyJOxn6b9U1Qp2a0OyZV3aZcDn/IdykBuMt4czYdIi1ZbF2HWK5uMjsbptyw6jrLPDTYl7IHczjTeSWzV/i8wZxALyyn2/mDuaRwOs2f+0QK4qxbjjGzOYz4XI65xhzzWJ+coyZzYTwYUaOMUcW85djzEYVB0eL77flwYGcyzFu1kHYUzk6JTyubMxZH99/vZYhPGDfs/X3axx7J9QZHPWSdRA29124anDUSzyGTv5lw1G2qf/9hte0lfUTN2yJkMR4Kbc5fSMkb/BjhSL5eT4HuvD+WrON50ARaYxqYCLVQJFeUw1MpBoo0muqgYlUA0V6TTUwkWqgSK+pBiZSDRQZlN7VvLK2/91VNU+k146rYanbs+taDWx6u4iIiIiIdNE/1BmFa24/tqUAAAAASUVORK5CYII="/>
const Garage = () => <img
  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAFIklEQVR4nO2aTYwVRRDHf7vsW32iEWVRF1iyCH6gIDFg/AKNuqIRMJEgiUZdTh68eNOTiUcxXjiYgB8hQTExKokxYiKiIRIDGFEjWSO7CLqsghgWED9CeA8P1ZPpGWfmzbypntn18U8682a6X1V1dXV3VXdBi2NCyfwrQBtwtmQ5Ckcb8DhwGPgFeLRccYrF1cBWZNTtsh2YW6JcznEh8BJwGunwEeAJU46Yb6eBNcDEkmR0huXAT0gna8BGoMuqnwSsBc6YNiOIYsY9ZgMf4Zv5V8DNCe1vBL6w2m8D5jiW0QmqwPPAP0hHRoGnSbfrtCGjfxR/WqxFptC4wHLgR0T4OmLulzVB51Kk4zVDaxhYqSSjE0wH3sE332+B2xXoLgR2W3Q/AGYq0FVDBTHvPxABTwHPAh2KPNqBJ4EThsdfyBQ7T5FHU7gLGCA4Oj0O+V2BTKm64TcI3O+QXyymGkG8ju8D7iuQ/53AXoKKn1EE4w7E3E8axn9Snil6Uy8sS6crhncA3xHUeq8rZhkwjaA1/gDcq8kgPO/2A0s1GSjhHuB7ggM0PQ/BdsQh+Z2gQzKW/fTzkWnwNyLzcdI7YAEsAHYRdEmvVRPTPWYBH+LL/zVwW5o/dgGv4Zv7z8AKNzIWghVIH7wg7FVgctIfdvD/C0snIn3xwvDPkxofMI0Wu5ercCxG+nbA/tge03jYuTjFI7JPcQpoGbS8AtJGbFOB61wK4gADyIlzItIqYA9weS5xisdhoLtRo7QK8Dr/SdPiFIs+xIVviKyHFqpBhkOkvmlq+UWw5RWQdQr0OZGiRGRVwFYnUpSIrAoYT7tAKrT8LqB5dm+jB7gVufTUQA0YQkLZuhLNSHjhcPiw0ztZSYNn8GNv7bKHFN5djLy9RITD2hawCDl8qAFbgENKdCvAEuT2+BXk/tEJ8lrA26bdC8pygRx/n0KmwOwGbVNbgKYjdDEyMnXgZUW6HkaAzcj1+WNaRDUV8AiSF/AZ7k6U3jDPfkQRuaGpAC+lZaMizTC2IcrtRencUksBVwG3IPdzm5VoRqEOvGV+92sQ1FKAZ5LvIQuVS3gWthK4IC8xjW1wAv6i1IkkR7jGccTJegjYpEk46zZYwd/6yijDROcFFOYIvQ6sQsx+PZLnVxT6kDvM94GbtHhnsYBF+Pk6Sbl/rnAJfvLlqlBdIY7QMvNch9wke5hMMAtUC1MIXmyOIm4xyGA0hTwK8HL/9prnNcCXSD7BUeAbYJ6pqyLRXNq5bV9g3mBo/WZo7za8QLxDgIua7UQeBXieWB1/C1yI5OycAOYjPkEHcqw+KwNtb0QrhsZ8ZOU/icz3dxljnuBM4Hpk5LuRM/khJGixb5QOIoInlYNW+zmI4oYN3W7ktmcuSsmSWuHwKGK6k4AHEd9gmqk7ZvGp0vi4qmr9PmaeXUiyQwVZC84anurIsgtsMN9Wm/f1/Hcuv2nqZkTUJZWaxWdTRP06U7favG9IIa/zA5GnkPzgJYgpf4ofFo8g6SlpzXan9bsfWVzvRtabj/EVoI48FlAGxoQFPEB5N8cL8hLQUMDDpoxLaChgC5JCa8OLCNco0E+iNw+xQDVorQFZjtHTII5e7jXg3O1wzPftpA8vXwSe0xGnIfaH3hvFAHb7yL6GPw4gphJ1yLAv9D5knlNMCWOwgXBZ4LnVV8bUh2UbRM4po9oP2C/hgKKT+BTzX5EsbPu/PcRbUbh9HlSJvxI7g8QK9pxPan8Iubo7B4B/AZnhp2MfkR1HAAAAAElFTkSuQmCC"/>

function MediumCard(data: any) {
  const {ad} = data;

  return (
    <div className="m-4 hover:shadow-xl rounded-xl cursor-pointer border">
      {/*<p>{ad.title}</p>*/}
      <div className="p-2">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img src={ad.gallery[0].src} alt={ad.gallery[0].src}/>
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-700 mb-1">{ad.location.province} / {ad.location.city} / {ad.location.suburb}</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              {ad.rooms.bed} Bedroom {ad.propertyType}
            </h1>
            <div className="flex items-center flex-wrap ">
              <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">{Intl.NumberFormat('en-ZA', {style: 'currency', currency: 'ZAR'}).format(ad.charges.price)}
              </a>
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>1.2K
              </span>

              <label className="px-1 text-xs">Baths {ad.rooms.bath} </label>
              {ad.rooms.garage && (
              <label className="px-1 text-xs">Garage {ad.rooms.garage} </label>
              )}

            </div>
          </div>
        </div>
      </div>

      {/*<div className="text-sm py-2">{ad.description}</div>*/}
      {/*<div className='bg-amber-600 text-white'>Included Features</div>*/}
      {/*<div className="border-2 grid-cols-3 grid">*/}
      {/*  {ad.features && ad.features.map(f => {*/}
      {/*    return (*/}
      {/*        <div>{f.label}</div>*/}
      {/*    )*/}
      {/*  })}*/}
      {/*</div>*/}

    </div>
  )
}


export default MediumCard;
