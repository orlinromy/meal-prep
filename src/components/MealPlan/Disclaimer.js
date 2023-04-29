import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';

const Disclaimer = (props) => {
  const { openDisclaimer, setOpenDisclaimer } = props

  return <Dialog onClose={() => { setOpenDisclaimer(false) }} open={openDisclaimer}>
    <DialogTitle>Disclaimer</DialogTitle>
    <DialogContent><p>The feature you're about to try out is still in the experimental phase, so the data you see might not be entirely accurate.</p></DialogContent>
    <DialogActions>
      <button
        onClick={() => { setOpenDisclaimer(false) }}
        className="w-[30%] max-w-[200px] bg-[#659B91] text-white py-2.5 rounded-xl text-lg hover:bg-[#517c74]"
      >
        OK
      </button>
    </DialogActions>
  </Dialog>
}

export default Disclaimer
