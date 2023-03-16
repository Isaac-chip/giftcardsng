import { useState } from "react";
import Root from "../components/common/Root";
export default function Home() {
  const introList = useState([
    {
      title: "100% Honesty",
      desc: "At TwoGiftCard, integrity is more than just a word. With unparalleled honesty, our agents are determined to providing a fully transparent service to all of our customers.",
      className: "ti-layers clr-blue",
    },
    {
      title: "Smooth Redeem",
      desc: "We offer seamless cash redeeming experience to make sure that you get credited instantly and can access your payment as quickly as possible.",
      className: "ti-unlock clr-red",
    },
    {
      title: "24/7 Support",
      desc: "We will stay by your side every step of the way to make sure you receive an exceptional customer service experience. Our determined support team is available 24 hours a day, 7 days a week.",
      className: "ti-time clr-green",
    },
    {
      title: "Communication",
      desc: "We are happy to hear from you, should you have any questions, concerns, or recommendations",
      className: "ti-mobile clr-cyan",
    },
  ]);
  return (
    <div>
       <Root>
      <section className="p-5 bg-dark text-light text-center text-sm-start">
        <div className="container">
          <div className="d-flex">
            <div>
              <h1>
                <span className="text-warning">
                  Trade Gift Cards Online Instantly at TwoGiftCard
                </span>
              </h1>
              <p className="my-4">
                Do you have a collection of gift cards that you plan on selling?
                Do you wish you could just get fast cash for gift cards instead?
                With the help of TwoGiftCard, a world-className gift card
                exchange service, you can do just that!
              </p>
              {/* <button className="btn btn-primary btn-lg">开始编程之旅</button> */}
              <p className="my-1">
                Simply sell gift cards to receive an instant cash payment in
                naira.
              </p>
              <a
                className="btn grdnt-yellow tradeBtn"
                target="_blank"
                href="https://api.whatsapp.com/send?phone=2347048161101&amp;text=Hello%20GC%20Buying,%20I%20want%20to%20trade%20my%20gift%20cards%20with%20you"
              >
                <i className="ti-comments"></i>
                <span style={{color:"white"}}>Trade on Whatsapp</span>
              </a>
            </div>

            <img
              src="./img/showcase.svg"
              alt="showcase"
              className="w-50 d-none d-md-block"
            />
          </div>
        </div>
      </section>
      <section className="p-5">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md p-5">
              <h2>Amazing Features</h2>
              <p className="lead">
                The Fastest and Simplest Way to Sell Gift Cards for Instant Cash
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="p-5">
        <div className="container">
          <div className="row g-4">
            {introList[0].map((item, index) => {
              return (
                <div className={"col-md-3 col-sm-6 res-margin"}>
                  <div className="item">
                    <div className="icon-md">
                      <span className={item.className}></span>
                    </div>
                    <div className="spce"></div>
                    <h5>{item.title}</h5>
                    <p>{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="p-5">
        <div className="container">
          <h2 className="text-center">How we work</h2>
          <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingOne">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="true"
                  aria-controls="flush-collapseOne"
                >
                  Selling your gift cards with TwoGiftCard is easy.
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <p className="large">
                    <strong>Initiate</strong> To initiate a gift card exchange
                    trade, send us a quick WhatsApp message.
                  </p>
                  <p className="large">
                    <strong>Processing</strong> After you initiate the trade,
                    you can sit back and relax while we process your gift cards
                    as quickly as possible, if you require the support or
                    assistance during this process, you can message us on the
                    live chat and a member of our dedicated team will reach out
                    to you within a minute. Once we get in touch, let us know
                    what you need, and your needs will be attended to shortly.
                  </p>
                  <p className="large">
                    <strong>Rates</strong> We offer competitive rates for
                    selling gift cards for cash, rival to nobody
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section style={{ paddingTop: "120px" }}>
        <div className="container">
          <div className="row">
            <div className="left col-lg-6 col-md-12 col-sm-12">
              <h3 style={{ color: "black", marginTop: "16px" }}>
                Gift Cards We Buy
              </h3>
              <div style={{ fontSize: "18px", color: "#5A7184" }}>
                We buy a whole lot of gift cards from USA and many other
                countries.
              </div>
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                <div
                  style={{
                    width: "50%",
                    color: "#5A7184",
                    display: "flex",
                    alignItems: "center",
                    margin: "20px 0",
                  }}
                >
                  <img src="img/checkmark-green-soft.svg"></img>
                  <div style={{ marginLeft: "10px" }}>
                    iTunes, Steam, Google, Visa
                  </div>
                </div>
                <div
                  style={{
                    width: "50%",
                    color: "#5A7184",
                    display: "flex",
                    alignItems: "center",
                    margin: "20px 0",
                  }}
                >
                  <img src="img/checkmark-green-soft.svg"></img>
                  <div style={{ marginLeft: "10px" }}>
                    Amazon, Sephora Nordstrom, Nike
                  </div>
                </div>
                <div
                  style={{
                    width: "50%",
                    color: "#5A7184",
                    display: "flex",
                    alignItems: "center",
                    margin: "20px 0",
                  }}
                >
                  <img src="img/checkmark-green-soft.svg"></img>
                  <div style={{ marginLeft: "10px" }}>
                    Walmart, Nike, Amex, Offgamers
                  </div>
                </div>{" "}
                <div
                  style={{
                    width: "50%",
                    color: "#5A7184",
                    display: "flex",
                    alignItems: "center",
                    margin: "20px 0",
                  }}
                >
                  <img src="img/checkmark-green-soft.svg"></img>
                  <div style={{ marginLeft: "10px" }}>
                    eBay, Best-Buy, Home Depot
                  </div>
                </div>{" "}
                <div
                  style={{
                    width: "50%",
                    color: "#5A7184",
                    display: "flex",
                    alignItems: "center",
                    margin: "20px 0",
                  }}
                >
                  <img src="img/checkmark-green-soft.svg"></img>
                  <div style={{ marginLeft: "10px" }}>
                    Apple Store, Macy, Vanilla, Target
                  </div>
                </div>
              </div>
            </div>
            <div className="right col-lg-6 col-md-12 col-sm-12">
              <div style={{ display: "flex" }}>
                <img
                  style={{
                    // width: "200px",
                    height: "257px",
                    borderRadius: "8px",
                    marginRight: "20px",
                    marginBottom: "20px",
                    objectFit: "cover",
                  }}
                  src="img/meeting.jpeg"
                ></img>

                {/* <img
                    style={{
                      width: "262px",
                      height: "355px",
                      marginTop: "-100px",
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                    src="img/meeting_2.jpeg"
                  ></img> */}
              </div>
              {/* <img
                  style={{
                    marginLeft: "70px",
                    width: "166px",
                    height: "166px",
                    marginTop: "20px",
                    marginBottom: "20px",
                  }}
                  src="img/desktop-pattern.svg"
                ></img> */}
            </div>
          </div>
        </div>
      </section>
      <section style={{ textAlign: "center" }}>
        <h3 style={{ marginTop: "156px", color: "black" }}>How It Works</h3>
        <div style={{ color: "gray", margin: "40px 0" }}>
          You must be wondering what our mode of operation is.
        </div>
        <div style={{ margin: "auto" }} className="content">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="card-f flex text-center wow fadeInUp">
                <div className="card-f-heading">
                  <div className="ic ic-lg ic-badge bg-primary-100 mb-36">
                    <img
                      src="https://exgiftcard.com/assets/images/icons/pie-chart.svg"
                      alt="Gift Cards To Naira"
                    ></img>
                  </div>
                </div>
                <div className="card-f-body">
                  <h4 className="text-20 text-black mb-12">Contact Us</h4>
                  <p className="text-gray mb-20">
                    Click trade with us button and contact us.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="card-f flex text-center wow fadeInUp">
                <div className="card-f-heading">
                  <div className="ic ic-lg ic-badge bg-primary-100 mb-36">
                    <img
                      src="https://exgiftcard.com/assets/images/icons/shield.svg"
                      alt="Gift Cards To Naira"
                    ></img>
                  </div>
                </div>
                <div className="card-f-body">
                  <h4 className="text-20 text-black mb-12">Begin Trade</h4>
                  <p className="text-gray mb-20">
                    Check out rate, you can start a trade, send the gift card
                    you want to sell and upload it.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="card-f flex text-center wow fadeInUp">
                <div className="card-f-heading">
                  <div className="ic ic-lg ic-badge bg-primary-100 mb-36">
                    <img
                      src="https://exgiftcard.com/assets/images/icons/line-chart.svg"
                      alt="Gift Cards To Naira"
                    ></img>
                  </div>
                </div>
                <div className="card-f-body">
                  <h4 className="text-20 text-black mb-12">
                    Wait For Confirmation
                  </h4>
                  <p className="text-gray mb-20">
                    Wait for your transaction to be processed, this usually
                    takes less than 5 minutes. Once your card has been redeemed,
                    send your bank account.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="card-f flex text-center wow fadeInUp">
                <div className="card-f-heading">
                  <div className="ic ic-lg ic-badge bg-primary-100 mb-36">
                    <img
                      src="https://exgiftcard.com/assets/images/icons/workflow.svg"
                      alt="Gift Cards To Naira"
                    ></img>
                  </div>
                </div>
                <div className="card-f-body">
                  <h4 className="text-20 text-black mb-12">Get Paids</h4>
                  <p className="text-gray mb-20">
                    Wait for payment to you, this is usually less than 5
                    minutes. Pretty easy right? Now begin trading like a boss.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Why Should I Trust You? */}
      <div style={{ marginTop: "240px" }} className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 col-md-12 col-sm-12">
            <div className="heading text-center wow fadeInUp">
              <h3 className="text-black mt-16">Why Should I Trust You?</h3>
              <p
                style={{ marginTop: "20px" }}
                className="text-18 text-gray mt-16 mb-0"
              >
                A whole lot of scam are out there and you want to know why we
                should be trusted right?
              </p>
            </div>
          </div>
        </div>
        <div style={{ marginTop: "160px" }} className="row">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="flex mb-64">
              <div className="card-f-heading mr-24">
                <div className="ic ic-badge ic-rounded rounded-16 ic-badge-outline border-primary-200 mb-24">
                  <img
                    src="https://exgiftcard.com/assets/images/icons/home.svg"
                    alt="Gift Cards To Naira"
                    loading="lazy"
                  ></img>
                </div>
              </div>
              <div className="card-f-body">
                <h4 className="text-22 text-black">3 Years Establishment</h4>
                <p className="text-gray mt-8">
                  We have been in business for 3 years and have had clean
                  records all through. We breath integrity and excellent
                  customer satisfaction. Also, we have more to gain from being
                  legit as our business have grown over time with incredible
                  referrals.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className=" flex p-0 mb-64 wow fadeInUp">
              <div className="card-f-heading mr-24">
                <div className="ic ic-badge ic-rounded rounded-16 ic-badge-outline border-primary-200 mb-24">
                  <img
                    src="https://exgiftcard.com/assets/images/icons/shield.svg"
                    alt="Gift Cards To Naira"
                    loading="lazy"
                  ></img>
                </div>
              </div>
              <div className="card-f-body">
                <h4 className="text-22 text-black">
                  World-className Customer Experience
                </h4>
                <p className="text-gray mt-8">
                  Our team have been trained by professionals so as to provide
                  you with top-notch customer experience. Every customer is
                  treated fairly and with care.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className=" flex p-0 mb-64 wow fadeInUp">
              <div className="card-f-heading mr-24">
                <div className="ic ic-badge ic-rounded rounded-16 ic-badge-outline border-primary-200 mb-24">
                  <img
                    src="https://exgiftcard.com/assets/images/icons/application.svg"
                    alt="Gift Cards To Naira"
                    loading="lazy"
                  ></img>
                </div>
              </div>
              <div className="card-f-body">
                <h4 className="text-22 text-black">Secure Transaction</h4>
                <p className="text-gray mt-8">
                  Trading with us is completely safe and secure. Your gift cards
                  are safe because we redeem them directly. We don't give out
                  cards to third party.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className=" flex p-0 wow fadeInUp">
              <div className="card-f-heading mr-24">
                <div className="ic ic-badge ic-rounded rounded-16 ic-badge-outline border-primary-200 mb-24">
                  <img
                    src="https://exgiftcard.com/assets/images/icons/multiple-shape.svg"
                    alt="Gift Cards To Naira"
                    loading="lazy"
                  ></img>
                </div>
              </div>
              <div className="card-f-body">
                <h4 className="text-22 text-black">Customer Reviews</h4>
                <p className="text-gray mt-8">
                  We have over 7000+ customer with amazing reviews all over the
                  internet. You can check some of them HERE
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className=" flex p-0 wow fadeInUp">
              <div className="card-f-heading mr-24">
                <div className="ic ic-badge ic-rounded rounded-16 ic-badge-outline border-primary-200 mb-24">
                  <img
                    src="https://exgiftcard.com/assets/images/icons/neutron.svg"
                    alt="Gift Cards To Naira"
                    loading="lazy"
                  ></img>
                </div>
              </div>
              <div className="card-f-body">
                <h4 className="text-22 text-black">24/7 Availability</h4>
                <p className="text-gray mt-8">
                  Yes, we are available every single minute of the day to trade
                  your gift cards. This is a fact!
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="flex p-0 wow fadeInUp">
              <div className="card-f-heading mr-24">
                <div className="ic ic-badge ic-rounded rounded-16 ic-badge-outline border-primary-200 mb-24">
                  <img
                    src="https://exgiftcard.com/assets/images/icons/like.svg"
                    alt="Gift Cards To Naira"
                    loading="lazy"
                  ></img>
                </div>
              </div>
              <div className="card-f-body">
                <h4 className="text-22 text-black">101% Satisfaction</h4>
                <p className="text-gray mt-8">
                  Maximum satisfaction is guaranteed when you trade with us. You
                  will always come back for more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Root>
    </div>
   
  );
}
