import React from 'react'
import './Pricing.css'
import Card from './Card'

let pricingDetails = [
    // Free Tier
    {
        title: "Free",
        price: "$0",
        period: "/month",
        user: {
            text: "Single User",
            available: 1
        },
        space: {
            text: "5GB Storage",
            available: 1
        },
        public_project: {
            text: "Unlimited Public Projects",
            available: 1
        },
        access: {
            text: "Community Access",
            available: 1
        },
        private_project: {
            text: "Unlimited Private Projects",
            available: 0
        },
        support: {
            text: "Dedicated Phone Support",
            available: 0
        },
        subdomain: {
            text: "Free Subdomain",
            unlimited: "",
            available: 0
        },
        report: {
            text: "Monthly Status Reports",
            available: 0
        }
    },

    // Plus Tier
    {
        title: "Plus",
        price: "$9",
        period: "/month",
        user: {
            text: "5 Users",
            available: 1
        },
        space: {
            text: "50GB Storage",
            available: 1
        },
        public_project: {
            text: "Unlimited Public Projects",
            available: 1
        },
        access: {
            text: "Community Access",
            available: 1
        },
        private_project: {
            text: "Unlimited Private Projects",
            available: 1
        },
        support: {
            text: "Dedicated Phone Support",
            available: 1
        },
        subdomain: {
            text: "Free Subdomain",
            unlimited: "",
            available: 1
        },
        report: {
            text: "Monthly Status Reports",
            available: 0
        }
    },

    // Pro Tier
    {
        title: "Pro",
        price: "$49",
        period: "/month",
        user: {
            text: "Unlimited Users",
            available: 1
        },
        space: {
            text: "150GB Storage",
            available: 1
        },
        public_project: {
            text: "Unlimited Public Projects",
            available: 1
        },
        access: {
            text: "Community Access",
            available: 1
        },
        private_project: {
            text: "Unlimited Private Projects",
            available: 1
        },
        support: {
            text: "Dedicated Phone Support",
            available: 1
        },
        subdomain: {
            text: "Free Subdomains",
            unlimited: "Unlimited ",
            available: 1
        },
        report: {
            text: "Monthly Status Reports",
            available: 1
        }
    }
]

export default function Pricing() {
    return (
        <div>
            <section className="pricing py-5">
                <div className="container">
                    <div className="row">
                        {
                            pricingDetails.map((details, index) => (
                                <div className="col-lg-4" key={index}>
                                    <Card 
                                        title = { details.title }
                                        price = { details.price }
                                        period = { details.period }
                                        user = { details.user }
                                        space = { details.space }
                                        public_project = { details.public_project }
                                        access = { details.access }
                                        private_project = { details.private_project }
                                        support = { details.support }
                                        subdomain = { details.subdomain }
                                        report = { details.report }
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}
