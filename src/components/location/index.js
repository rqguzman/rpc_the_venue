import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            
            <iframe 
                title="location" 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9020.22923001094!2d12.981574089929737!3d55.58361041457469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4653a149a39aa09f%3A0x57197755c8194186!2zU3RhZGlvbm9tcsOlZGV0LCAyMTcgNjIgTWFsbcO2LCBTdcOpY2lh!5e0!3m2!1spt-BR!2sbr!4v1616615695174!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="500px" 
                style={{ 
                    border:0
                 }} 
                allowFullScreen 
                loading="lazy"
            ></iframe>
            <div className="location_tag">
                <div>
                    Location
                </div>
            </div>
        </div>
    );
};

export default Location;