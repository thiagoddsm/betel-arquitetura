"use client"

export const Divider = ({ addClasses, width = 'w-full', height = '2px', color = 'bg-primary' }) => {

   
   const styles = {
      height: height
   }

   return (
      <span 
         className={`divider block ${color} ${addClasses} ${width}`} 
         style={styles}
      >
      </span>
   )
}

export default Divider