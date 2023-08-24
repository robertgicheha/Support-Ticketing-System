import { useSelector, useDispatch } from 'react-redux'
import { getTicket, reset } from '../features/tickets/ticketSlice'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'

function Ticket() {
  const { ticket, isLoading, isSuccess, message, isError } = useSelector(
    (state) => state.tickets
  )
  const params = useParams()
  const dispatch = useDispatch()
  const { ticketId } = useParams()

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }
    dispatch(getTicket(ticketId))
    //eslint-disable-next-line
  }, [isError, message, ticketId])

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h3>Something went wrong</h3>
  }

  return (
    <div className='ticket-page'>
      <div className='ticket-header'>
        <BackButton url='/tickets' />
        <h2>
          Ticket ID:{ticket._id}
          <span className={`status status-${ticket.status}`}>
            {ticket.status}
          </span>
        </h2>
        <h3>
          Date Submitted: {new Date(ticket.createdAt).toLocaleString('en-Us')}
        </h3>
        <hr />
        <div className='tickets-desc'>
          <h3>Description of issue</h3>
          <p>{ticket.description}</p>
        </div>
      </div>
    </div>
  )
}

export default Ticket
