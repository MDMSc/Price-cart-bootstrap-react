import React from 'react'
import './Card.css'

export default function Card(props) {
    return (
        <div className="card mb-5 mb-lg-0">
            <div className="card-body">
                <h5 className="card-title text-muted text-uppercase text-center">{props.title}</h5>
                <h6 className="card-price text-center">{props.price}<span className="period">{props.period}</span></h6>
                <hr />
                <ul className="fa-ul">
                    <li className={props.user.available ? "" : "text-muted"}><span className="fa-li"><i className={props.user.available ? "fas fa-check" : "fas fa-times"}></i></span>{props.user.important ? <strong>{props.user.text}</strong> : props.user.text}</li>
                    <li className={props.space.available ? "" : "text-muted"}><span className="fa-li"><i className={props.space.available ? "fas fa-check" : "fas fa-times"}></i></span>{props.space.text}</li>
                    <li className={props.public_project.available ? "" : "text-muted"}><span className="fa-li"><i className={props.public_project.available ? "fas fa-check" : "fas fa-times"}></i></span>{props.public_project.text}</li>
                    <li className={props.access.available ? "" : "text-muted"}><span className="fa-li"><i className={props.access.available ? "fas fa-check" : "fas fa-times"}></i></span>{props.access.text}</li>
                    <li className={props.private_project.available ? "" : "text-muted"}><span className="fa-li"><i className={props.private_project.available ? "fas fa-check" : "fas fa-times"}></i></span>{props.private_project.text}</li>
                    <li className={props.support.available ? "" : "text-muted"}><span className="fa-li"><i className={props.support.available ? "fas fa-check" : "fas fa-times"}></i></span>{props.support.text}</li>
                    <li className={props.subdomain.available ? "" : "text-muted"}><span className="fa-li"><i className={props.subdomain.available ? "fas fa-check" : "fas fa-times"}></i></span><strong>{props.subdomain.unlimited}</strong>{props.subdomain.text}</li>
                    <li className={props.report.available ? "" : "text-muted"}><span className="fa-li"><i className={props.report.available ? "fas fa-check" : "fas fa-times"}></i></span>{props.report.text}</li>
                </ul>
                <div className="d-grid">
                    <a href="#" className="btn btn-primary text-uppercase">Button</a>
                </div>
            </div>
        </div>
    );
}
