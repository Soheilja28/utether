import Component, { PageEl } from '@/components/Libs/Component';
import Copy from '@/components/Libs/Copy';
import Router from 'next/router'
import Window from '@/components/Libs/Window';
import TextBox from '@/components/Libs/TextBox';
import Icon2Titles from '@/components/Libs/Icon2Titles';
import Icon3Titles from '@/components/Libs/Icon3Titles';
import { parse } from 'path';
import { url } from 'inspector';
import { Span } from 'next/dist/trace';


export default p => Component(p, Page);
const Page: PageEl = (props, state, refresh, getProps) => {

  let styles = global.styles

  global.lang = { ff: "vr", ffb: "vb" }


  // if (typeof window != "undefined") {
  //   const number = 2
  //   const resultDiv = document.getElementById('result');

  //   if (number >= 0) {
  //     resultDiv.style.backgroundColor = 'lime';
  //     resultDiv.textContent = (props.p.price as number).toLocaleString("fa-IR");
  //   }
  //   else {
  //     resultDiv.style.backgroundColor = 'red';
  //     resultDiv.textContent = (props.p.price as number).toLocaleString("fa-IR");
  //   }

  return (
    <div style={{ direction: "ltr", minHeight: "11vh" }}>
      <br-x />
      <Window title={"قیمت لحظه ای تتر"} style={{ minHeight: 500, margin: 10, width: "calc(100% - 60px)", backgroundColor: "white" }}>
        {/* <div>
          لحظه ای : {(props.p.price as number).toLocaleString("fa-IR")}
        </div> */}
        <div style={{ float: "left" }}>
          <div style={{ position: "relative" }}>
            <img src='https://cdn.arz.digital/cr-odin/img/assets/tether/200x200.png' alt='USDT' width={"100px"} height={"100px"} style={{
              position: "absolute",
              zIndex: 1,
              marginLeft: "10px"
            }} />

            <p style={{
              fontSize: "27px",
              fontWeight: "bold",
              marginLeft: "120px",
              marginTop: "25px",
              display: "inline-block"
            }}>Tether USDT</p>

            <span style={{
              fontSize: "23px",
              marginLeft: "5px"
            }}>(USDT)</span>


            <span style={{
              marginLeft: "250px",
              fontSize: "35px",
              fontWeight: "bold",
              fontFamily: "inherit"
            }}>



              <span>{Number(props.p.price as number).toLocaleString("fa-IR")}</span> <span style={{
                fontSize: "20px",
                paddingLeft: "7px",
                paddingRight: "7px",
                color: "white",
                backgroundColor: "red",
                paddingTop: "16px",
                paddingBottom: "16px",
                borderStyle: "solid",
                borderColor: "red",
                borderRadius: "100px"
              }}>{Number(props.p.diff24d as number).toLocaleString("fa-IR")} </span>
            </span>
          </div>

          <span style={{
            marginLeft: "615px",
            fontSize: "20px"
          }}>تومان</span>

          <br-x />
          <br-x />

          <hr style={{
            width: "57%",
            marginLeft: "300px"
          }} />

          <br-x />

          <div style={{ position: "relative" }}>
            <span style={{
              fontSize: "27px",
              fontWeight: "bold",
              marginLeft: "250px",
              paddingLeft: "50px",
              marginTop: "25px",
              display: "inline-block"
            }}>

              {Number(props.p.diff30d as number).toLocaleString("fa-IR")}  ٪   <span style={{
                fontFamily: "inherit",
                fontSize: "17px",
                backgroundColor: "gainsboro",
                padding: "5px",
                borderRadius: "10px"
              }}>ماهانه 🗓️</span>
            </span>


            <span style={{
              marginLeft: "120px",
              fontSize: "27px",
              fontWeight: "bold",
              fontFamily: "inherit"
            }}>

              {Number(props.p.diff7d as number).toLocaleString("fa-IR")}  ٪   <span style={{
                fontFamily: "inherit",
                fontSize: "17px",
                backgroundColor: "gainsboro",
                padding: "5px",
                borderRadius: "10px"
              }}>هفتگی 📊</span>
            </span>
          </div>

          <br-x />
          <br-x />
          <br-x />
          <br-x />
          <br-x />
          <br-x />

          <div style={{
            borderStyle: "solid",
            borderColor: "lightgray",
            borderRadius: "20px",
            backgroundColor: "lightgray",
            marginLeft: "100px",
            marginRight: "50px",
            paddingTop: "20px",
            paddingBottom: "30px"
          }}>

            <span style={{
              marginLeft: "50px",
              fontSize: "24px",
              fontWeight: "bold",
              fontFamily: "inherit"
            }}>

              {(props.p.last24h as number).toLocaleString("fa-IR")}  <span style={{
                fontFamily: "inherit",
                fontSize: "17px",
                paddingLeft: "351px"
              }}>قیمت ۲۴ ساعت گذشته🕦</span>
            </span>

            <br-x />
            <br-x />
            <br-x />
            <br-x />

            <span style={{
              marginLeft: "50px",
              fontSize: "24px",
              fontWeight: "bold",
              fontFamily: "inherit"
            }}>

              {(props.p.last30dMin as number).toLocaleString("fa-IR")}  <span style={{
                fontFamily: "inherit",
                fontSize: "17px",
                paddingLeft: "345px"
              }}>کمترین قیمت ماه گذشته📅</span>
            </span>

            <br-x />
            <br-x />
            <br-x />
            <br-x />

            <span style={{
              marginLeft: "50px",
              fontSize: "24px",
              fontWeight: "bold",
              fontFamily: "inherit"
            }}>

              {(props.p.last30dMax as number).toLocaleString("fa-IR")}  <span style={{
                fontFamily: "inherit",
                fontSize: "17px",
                paddingLeft: "333px"
              }}>بیشترین قیمت ماه گذشته📉</span>
            </span>
          </div>

          <br-x />

          <span style={{
            marginLeft: "320px",
            backgroundColor: "whitesmoke",
            padding: "2px",
            color: "black",
            borderRadius: "5px"
          }}>Developed by Soheil Jalali (TiraDev)</span>
        </div>

      </Window>
      <video autoPlay loop style={{
        width: "450px",
        height: "40%",
        paddingRight: "1%",
        marginLeft: "215px",
        borderRadius: "25px",
        opacity: 0.80
      }}><source src='/soheil.mp4' type='video/mp4'></source></video>
    </div>
  )
}


export async function getServerSideProps(context) {


  var session = await global.SSRVerify(context)
  var { uid, name, image, imageprop, lang, cchar,
    unit, workspace, servid, servsecret,
    usedquota, quota, quotaunit, status, regdate, expid,
    role, path, devmod, userip, } = session;

  let res = await fetch("https://api.tetherland.com/currencies")
  let data = await res.json()
  let p = data.data.currencies.USDT


  console.log("price: ", p)

  return {
    props: {
      data: global.QSON.stringify({
        p,
        session,
        // nlangs,
      })
    },
  }
}