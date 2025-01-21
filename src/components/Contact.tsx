import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function Contact() {
  return (
    <div className='block-cont z-10 flex justify-evenly items-center h-full p-3 lg:p-0'>
      <a href='' className="icon"><GitHubIcon sx={{ fontSize: '100%' }}/></a>
      <a href='' className="icon"><InstagramIcon sx={{ fontSize: '100%' }}/></a>
      <a href='' className="icon"><LinkedInIcon sx={{ fontSize: '100%' }}/></a>
      <a href='' className="icon"><WhatsAppIcon sx={{ fontSize: '100%' }}/></a>
    </div>

  )
}

export default Contact