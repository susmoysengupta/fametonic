import Image from 'next/image';
import ChevronRightSVG from './assets/icons/chevron-right.svg';
import HamburgerSVG from './assets/icons/hamburger.svg';
import LogoSVG from './assets/logo.svg';

export default function Home() {
	return (
		<div className="min-h-screen text-white font-main">
			<header className="w-full bg-gradient-to-r from-[#EE0B55] to-[#35ABC9] py-2 px-4 text-center text-sm lg:text-base font-semibold">
				<span className="text-[#00E7F9] font-extrabold">
					🚀 FRESH BEGINNINGS SALE :
				</span>{' '}
				<span className="text-white">
					Extra 25% OFF, Limited spots - start your journey today!
				</span>
			</header>

			<main className="px-5 py-4 pb-16 lg:py-8 lg:px-32">
				<div className="relative flex flex-col w-full mb-10 lg:gap-12">
					<nav className="absolute top-0 left-0 right-0 flex items-center justify-between lg:static lg:items-start">
						<div className="flex justify-center flex-1 lg:justify-start">
							<Image
								src={LogoSVG}
								alt="fame tonic"
								className="w-28 lg:w-40"
							/>
						</div>
						<button className="absolute right-0 lg:hidden">
							<Image src={HamburgerSVG} alt="menu" />
						</button>

						<div className="hidden lg:block space-x-10 font-semibold text-[18px] text-[#A9A9A9]">
							<span>About us</span>
							<span>Contact</span>
						</div>
					</nav>

					<Image
						src="/mobile.png"
						alt="fame tonic app"
						className="top-0 right-0 mt-8 lg:absolute -z-10 lg:w-1/2 rounded-xl drop-shadow-2xl"
						width={2031}
						height={3083}
						priority
					/>

					<div className="-mt-12 lg:-mt-0 lg:w-[55%] flex flex-col items-center text-center lg:text-left lg:items-start">
						<h1 className="text-2xl font-extrabold lg:text-4xl">
							Want to Turn Social Media Into a Profitable Career?
						</h1>
						<h2 className="text-xl lg:text-3xl mt-2 text-[#00E7F9] drop-shadow-[0_2px_2px_rgba(252,0,78,0.75)] font-extrabold">
							Discover your way to success with Fametonic:
						</h2>

						<ul className="mt-6 space-y-4 text-base font-medium text-left lg:text-lg">
							<li className="flex items-start gap-2">
								<span>✨</span>
								<span>
									Start growing your influence right away—no
									waiting required!
								</span>
							</li>
							<li className="flex items-start gap-2">
								<span>✨</span>
								<span>
									Create viral TikToks and Reels step by step
									with easy-to-follow lessons
								</span>
							</li>
							<li className="flex items-start gap-2">
								<span>✨</span>
								<span>
									Use a Personal AI Worker to boost your
									content
								</span>
							</li>
							<li className="flex items-start gap-2">
								<span>✨</span>
								<span>
									Learn from expert-led courses designed for
									aspiring influencers
								</span>
							</li>
						</ul>

						<div className="w-full mt-8 text-center lg:w-1/2">
							<button className="w-full font-main bg-[#FC004E] hover:bg-[#e10047] text-white text-lg font-bold py-2 px-6 rounded-[10px] drop-shadow-md drop-shadow-[#00E7F9] flex items-center justify-center gap-2">
								GET STARTED
								<span>
									<Image src={ChevronRightSVG} alt="" />
								</span>
							</button>
							<p className="mt-[10px] text-xs">
								1-minute quiz for personalized Insights
							</p>
						</div>

						<p className="text-[10px] text-[#ABABAB] mt-6">
							By clicking &quot;Get Started&quot;, you agree with
							Terms and Conditions, Privacy Policy, Subscription
							Terms
						</p>
						<p className="text-[10px] text-[#ABABAB] mt-1 lg:mt-3 font-nunito">
							Fametonic 2025 © All Rights Reserved.
						</p>
					</div>
				</div>
			</main>
		</div>
	);
}
