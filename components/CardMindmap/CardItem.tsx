import React from 'react'

export const CardItem = () => {
  return (
    <div className='shadow-[0_0_5px_rgb(0_0_0_/_10%)] pt-[15px] pb-[15px] px-5 rounded-[6px_6px_6px_6px] border-b-[3px] border-b-[#2663e4] border-solid bg-white group flex justify-center w-[10%] m-auto relative'>
        <div className='after:content-[""] after:w-[2.5px] after:h-[100px] after:absolute after:bg-[#2663E4] after:top-[110px] after:m-auto after:inset-x-0'></div>
        <div className='after:content-[""] after:w-[700px] after:h-0.5 after:absolute after:bg-[black] after:m-auto after:bottom-0 after:inset-x-0'></div>
        <svg className='group-hover:fill-red-500 fill-black' fill="#000000" width="120px" height="80px" viewBox="0 0 14 14" role="img" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="m 2.4084867,5.405739 0,0.497186 -0.037137,-0.0068 C 2.1432203,5.856335 1.9003118,5.872255 1.6934038,5.941215 1.2352503,6.094312 0.97832059,6.50017 1.0014367,7.03525 c 0.01099,0.239877 0.059117,0.405101 0.1629495,0.56085 0.1481704,0.223203 0.3880473,0.355836 0.7389573,0.411163 0.2580665,0.04093 0.7829156,0.01213 1.137994,-0.06291 l 0.026906,-0.0061 0,-3.028209 -0.6601351,0 0,0.496049 z m -0.04699,1.014077 0.04699,0.01213 0,1.055004 -0.067075,0.0061 C 2.0803135,7.51806 1.9082691,7.4741 1.7983729,7.352838 1.7123507,7.258858 1.6683922,7.124708 1.6683922,6.959864 c 0,-0.292172 0.1390755,-0.489986 0.3838788,-0.54607 0.070864,-0.01592 0.2368453,-0.01289 0.3092252,0.0061 z m 1.0970672,-1.175132 0,0.334994 0.6601351,0 -0.00189,-0.333099 -0.00303,-0.331962 -0.3270359,-0.003 -0.3281728,-0.0019 0,0.334994 z M 5.2487351,5.87564 C 5.0156794,5.89269 4.771634,5.95257 4.5666208,6.042758 l -0.05798,0.02615 0,0.252003 c 0,0.197055 0.00303,0.250109 0.012884,0.24594 0.3531837,-0.151202 0.5278807,-0.192886 0.7741998,-0.186065 0.103833,0.003 0.1261912,0.0068 0.1500652,0.02501 0.048127,0.03486 0.062906,0.07806 0.062906,0.181139 0,0.05116 -0.00189,0.09284 -0.00493,0.09284 -0.0288,0 -0.2239609,0.02501 -0.3171832,0.04093 -0.4789958,0.07996 -0.7272097,0.244045 -0.7931474,0.52106 -0.018948,0.08299 -0.018948,0.283077 0,0.366068 0.032211,0.134149 0.1000435,0.234192 0.2080449,0.303161 0.2239609,0.145139 0.5619864,0.159918 1.4449455,0.06291 l 0.062148,-0.0068 0,-0.751083 c 0,-0.413058 -0.00493,-0.792011 -0.00985,-0.842032 C 6.0687876,6.09278 5.9346389,5.95181 5.6417086,5.896104 5.5598546,5.880944 5.3427152,5.869954 5.248735,5.876014 Z m 0.2898986,1.453283 0,0.219034 -0.087159,0.01288 C 5.3154308,7.580927 5.1335337,7.578647 5.0763119,7.556637 4.9720999,7.516467 4.9311731,7.399751 4.9842269,7.297434 5.0130269,7.241354 5.0842704,7.195495 5.190377,7.164421 5.242294,7.149261 5.4654965,7.112501 5.5162761,7.110611 l 0.021979,-0.0011 0,0.219035 z M 7.3087204,5.876777 c -0.2372242,0.0099 -0.5911658,0.06707 -0.8420323,0.134149 l -0.037895,0.0099 0,1.979268 0.6601351,0 0.00189,-0.777989 0.00303,-0.776852 0.070106,-0.01895 c 0.050022,-0.01288 0.1080014,-0.01895 0.2050132,-0.02009 0.1220227,-0.0011 0.1402124,0.0011 0.1879604,0.02312 0.064801,0.0288 0.1061067,0.07503 0.1288438,0.142865 0.015916,0.04813 0.017811,0.114822 0.020842,0.740094 l 0.00303,0.688177 0.6499034,0 -0.00417,-0.782158 C 8.3523552,6.515312 8.3504605,6.428153 8.3353024,6.37131 8.3053651,6.258382 8.2602698,6.182213 8.1784161,6.099222 8.0503301,5.970378 7.8782858,5.903304 7.6152928,5.881324 7.4932701,5.871424 7.4584065,5.870334 7.3083413,5.877124 Z m 4.3947106,0.008 c -0.385015,0.07011 -0.660893,0.300888 -0.776852,0.652935 -0.05495,0.164844 -0.07011,0.281941 -0.06404,0.491122 0.0042,0.125055 0.01099,0.200845 0.02501,0.262235 0.08185,0.349016 0.298993,0.593819 0.622998,0.704094 0.277014,0.09512 0.658998,0.0792 0.911001,-0.0379 0.32211,-0.147792 0.519165,-0.438069 0.566913,-0.83218 0.05608,-0.45588 -0.09512,-0.86818 -0.391079,-1.072056 C 12.468538,5.963977 12.365463,5.921909 12.196451,5.88894 12.080491,5.86582 11.816361,5.86393 11.703433,5.88474 Z m 0.367963,0.535081 c 0.106107,0.03903 0.186066,0.142107 0.230024,0.294825 0.02008,0.06897 0.02312,0.103075 0.02312,0.245182 0,0.14097 -0.003,0.175834 -0.02312,0.242908 -0.04396,0.153855 -0.111033,0.244046 -0.220171,0.295204 -0.04888,0.02312 -0.07011,0.02691 -0.15196,0.02691 -0.0811,0 -0.103075,-0.0042 -0.150065,-0.02615 C 11.67122,7.448717 11.60642,7.36762 11.561324,7.231576 c -0.03411,-0.103833 -0.0432,-0.344847 -0.01781,-0.468006 0.02994,-0.142865 0.08981,-0.247077 0.181139,-0.309226 0.09701,-0.06707 0.226992,-0.07996 0.34712,-0.03486 z M 9.8242064,5.885872 C 9.5612134,5.913912 9.3641581,5.962042 9.1921138,6.040863 8.7820872,6.228824 8.569116,6.571018 8.569116,7.039782 c 0,0.460048 0.2099396,0.793147 0.5801761,0.921991 0.2099397,0.07314 0.4930171,0.07617 0.693104,0.0068 0.048885,-0.01705 0.090191,-0.0288 0.092085,-0.0269 0.00796,0.008 -0.015158,0.197055 -0.031074,0.248213 C 9.8522481,8.360794 9.7503103,8.457806 9.56955,8.50707 9.476707,8.53322 9.1606604,8.53322 9.0393956,8.50707 8.933289,8.48509 8.7862554,8.43696 8.6922752,8.394142 l -0.073138,-0.03297 0,0.605945 0.1178542,0.036 c 0.2000869,0.06101 0.3690997,0.08716 0.5851025,0.08716 0.4930171,0.0011 0.8439271,-0.150823 1.0500771,-0.453985 0.09209,-0.136044 0.151202,-0.308846 0.179244,-0.529017 0.01402,-0.11217 0.01705,-1.267975 0.0042,-1.535894 l -0.0068,-0.143244 0.07693,0.003 0.07806,0.0042 0.109139,-0.22813 c 0.05983,-0.125054 0.106816,-0.230024 0.104921,-0.233055 -0.0091,-0.008 -0.208045,-0.04396 -0.3619,-0.0648 -0.11217,-0.01516 -0.220929,-0.02084 -0.421016,-0.02387 -0.1481705,-0.0011 -0.2880039,-0.0011 -0.3099831,0.0011 z m 0.098907,0.676051 c 0.00303,0.09019 0.00796,0.325899 0.01099,0.524849 l 0.00606,0.3619 -0.037895,0.01023 C 9.7544769,7.498692 9.6082013,7.498692 9.5062631,7.460802 9.3361135,7.395622 9.2500913,7.249726 9.2413754,7.01288 9.2345554,6.814688 9.2724494,6.687739 9.371356,6.583906 9.4804943,6.468705 9.6483702,6.406935 9.86551,6.400872 l 0.051916,-0.0011 0.00606,0.162192 z M 3.4585643,6.682051 c 0,1.133068 -0.014021,1.281238 -0.1371807,1.521115 -0.076927,0.150065 -0.2190345,0.275119 -0.4320058,0.381984 -0.05419,0.02691 -0.070864,0.03903 -0.059875,0.04509 0.00796,0.0049 0.1451388,0.07011 0.3039199,0.145139 L 3.4233213,8.91256 3.4843323,8.88149 C 3.8723796,8.680645 4.0482135,8.399462 4.0986141,7.895455 4.1054341,7.829515 4.1126351,7.41646 4.1156671,6.852578 l 0.00606,-0.932223 -0.6631667,0 0,0.762074 z"/></svg>
    </div>
  )
}
