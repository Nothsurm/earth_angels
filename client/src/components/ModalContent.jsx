import { Button, Modal, TextInput, Label } from "flowbite-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

export default function ModalContent() {
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        try {
            if (password === import.meta.env.VITE_PASSWORD) {
                sessionStorage.setItem(
                    import.meta.env.VITE_SESSIONSTORAGE_KEY, 
                    import.meta.env.VITE_SESSIONSTORAGE_VALUE
                )
                toast.success('Password Successful', {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    theme: "dark"
                })
                navigate('/brochure')
            } else {
                toast.error('Incorrect Password', {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    theme: "dark"
                })
            }
        } catch (error) {
            toast.error('Incorrect Password')
        }
    }
  return (
    <div>
        <Modal.Header>This section requires a password to access</Modal.Header>
        <Modal.Body>
        <form onSubmit={handleSubmit} className="flex max-w-full flex-col gap-4">
            <div>
                <Label htmlFor="password" value="Enter Password" />
                <TextInput 
                    id="password"
                    type="password" 
                    placeholder="********" 
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required 
                />
            </div>
            <Button 
                type="submit"
                className="max-w-[80px]"
            >
                Submit
            </Button>
        </form>
        </Modal.Body>
    </div>
  )
}
