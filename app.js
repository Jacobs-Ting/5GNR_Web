const TS_38101_N_RB_FR1 = {
    5: {15: 25, 30: 11}, 10: {15: 52, 30: 24, 60: 11}, 15: {15: 79, 30: 38, 60: 18},
    20: {15: 106, 30: 51, 60: 24}, 25: {15: 133, 30: 65, 60: 31}, 30: {15: 160, 30: 78, 60: 38},
    40: {15: 216, 30: 106, 60: 51}, 50: {15: 270, 30: 133, 60: 65}, 60: {30: 162, 60: 79},
    70: {30: 189, 60: 93}, 80: {30: 217, 60: 107}, 90: {30: 245, 60: 121}, 100: {30: 273, 60: 135}
};
const TS_38101_N_RB_FR2 = {
    50: {60: 66, 120: 32}, 100: {60: 132, 120: 66}, 200: {60: 264, 120: 132}, 400: {120: 264}
};
const band_db_fr1 = {
    "n1": {mode: "FDD", dl_min: 2110.0, dl_max: 2170.0, ul_min: 1920.0, ul_max: 1980.0},
    "n2": {mode: "FDD", dl_min: 1930.0, dl_max: 1990.0, ul_min: 1850.0, ul_max: 1910.0},
    "n3": {mode: "FDD", dl_min: 1805.0, dl_max: 1880.0, ul_min: 1710.0, ul_max: 1785.0},
    "n5": {mode: "FDD", dl_min: 869.0, dl_max: 894.0, ul_min: 824.0, ul_max: 849.0},
    "n7": {mode: "FDD", dl_min: 2620.0, dl_max: 2690.0, ul_min: 2500.0, ul_max: 2570.0},
    "n8": {mode: "FDD", dl_min: 925.0, dl_max: 960.0, ul_min: 880.0, ul_max: 915.0},
    "n12": {mode: "FDD", dl_min: 729.0, dl_max: 746.0, ul_min: 699.0, ul_max: 716.0},
    "n14": {mode: "FDD", dl_min: 758.0, dl_max: 768.0, ul_min: 788.0, ul_max: 798.0},
    "n20": {mode: "FDD", dl_min: 791.0, dl_max: 821.0, ul_min: 832.0, ul_max: 862.0},
    "n25": {mode: "FDD", dl_min: 1930.0, dl_max: 1995.0, ul_min: 1850.0, ul_max: 1915.0},
    "n28": {mode: "FDD", dl_min: 758.0, dl_max: 803.0, ul_min: 703.0, ul_max: 748.0},
    "n29": {mode: "SDL", dl_min: 717.0, dl_max: 728.0, ul_min: 0.0, ul_max: 0.0},
    "n30": {mode: "FDD", dl_min: 2350.0, dl_max: 2360.0, ul_min: 2305.0, ul_max: 2315.0},
    "n38": {mode: "TDD", dl_min: 2570.0, dl_max: 2620.0, ul_min: 2570.0, ul_max: 2620.0},
    "n39": {mode: "TDD", dl_min: 1880.0, dl_max: 1920.0, ul_min: 1880.0, ul_max: 1920.0},
    "n40": {mode: "TDD", dl_min: 2300.0, dl_max: 2400.0, ul_min: 2300.0, ul_max: 2400.0},
    "n41": {mode: "TDD", dl_min: 2496.0, dl_max: 2690.0, ul_min: 2496.0, ul_max: 2690.0},
    "n48": {mode: "TDD", dl_min: 3550.0, dl_max: 3700.0, ul_min: 3550.0, ul_max: 3700.0},
    "n66": {mode: "FDD", dl_min: 2110.0, dl_max: 2200.0, ul_min: 1710.0, ul_max: 1780.0},
    "n71": {mode: "FDD", dl_min: 617.0, dl_max: 652.0, ul_min: 663.0, ul_max: 698.0},
    "n77": {mode: "TDD", dl_min: 3300.0, dl_max: 4200.0, ul_min: 3300.0, ul_max: 4200.0},
    "n78": {mode: "TDD", dl_min: 3300.0, dl_max: 3800.0, ul_min: 3300.0, ul_max: 3800.0},
    "n79": {mode: "TDD", dl_min: 4400.0, dl_max: 5000.0, ul_min: 4400.0, ul_max: 5000.0},
    "n80": {mode: "SUL", dl_min: 0.0, dl_max: 0.0, ul_min: 1710.0, ul_max: 1785.0}
};
const band_db_fr2 = {
    "n257": {mode: "TDD", dl_min: 26500.0, dl_max: 29500.0, ul_min: 26500.0, ul_max: 29500.0},
    "n258": {mode: "TDD", dl_min: 24250.0, dl_max: 27500.0, ul_min: 24250.0, ul_max: 27500.0},
    "n260": {mode: "TDD", dl_min: 37000.0, dl_max: 40000.0, ul_min: 37000.0, ul_max: 40000.0},
    "n261": {mode: "TDD", dl_min: 27500.0, dl_max: 28350.0, ul_min: 27500.0, ul_max: 28350.0}
};
const band_db_ntn = {
    "n255": {mode: "FDD", dl_min: 1525.0, dl_max: 1559.0, ul_min: 1626.5, ul_max: 1660.5},
    "n256": {mode: "FDD", dl_min: 2170.0, dl_max: 2200.0, ul_min: 1980.0, ul_max: 2010.0}
};

const COLOR_MAP = {
    0: 'transparent', 1: '#00e5ff', 2: '#112240', 3: '#ffeb3b', 4: '#39ff14', 5: '#0a3619',
    6: '#ff9800', 7: '#ffffff', 8: '#ff1493', 9: '#ff4500', 10: '#adff2f', 11: '#ff1493', 12: '#ff003c'
};
const PDCCH=1, PDSCH=2, CSI_RS=3, PUCCH=4, PUSCH=5, SRS=6, DMRS_DL=7, PTRS_DL=8, DMRS_UL=10, PTRS_UL=11, SSB=12, PRACH=9;

function freq_to_arfcn(freq_mhz) {
    if (freq_mhz < 3000.0) return Math.round(freq_mhz / 0.005);
    else if (freq_mhz <= 10050.0) return Math.round(600000 + (freq_mhz - 3000.0) / 0.015);
    else return Math.round(2016667 + (freq_mhz - 24250.08) / 0.06);
}
function arfcn_to_freq_mhz(arfcn) {
    if (arfcn <= 600000) return arfcn * 0.005;
    else if (arfcn <= 2016666) return 3000.0 + (arfcn - 600000) * 0.015;
    else return 24250.08 + (arfcn - 2016667) * 0.06;
}

function el(id) { return document.getElementById(id); }

let active_band_db = band_db_fr1;
let active_n_rb_table = TS_38101_N_RB_FR1;

function updateDomain() {
    const d = el('domain_selection').value;
    if (d === 'FR2') { active_band_db = band_db_fr2; active_n_rb_table = TS_38101_N_RB_FR2; el('user_band').value = 'n257'; }
    else if (d === 'NTN') { active_band_db = band_db_ntn; active_n_rb_table = TS_38101_N_RB_FR1; el('user_band').value = 'n256'; }
    else { active_band_db = band_db_fr1; active_n_rb_table = TS_38101_N_RB_FR1; el('user_band').value = 'n78'; }
    updateBand();
}

let b_info, duplex_mode, dl_min, dl_max, ul_min, ul_max;

function updateBand() {
    const band = el('user_band').value.trim().toLowerCase();
    if (active_band_db[band]) {
        b_info = active_band_db[band];
        duplex_mode = b_info.mode;
        dl_min = b_info.dl_min; dl_max = b_info.dl_max; ul_min = b_info.ul_min; ul_max = b_info.ul_max;
        el('duplex_mode').value = duplex_mode;
        el('freq_custom_container').style.display = 'none';
        el('duplex_mode_container').style.display = 'none';
    } else {
        duplex_mode = el('duplex_mode').value;
        dl_min = parseFloat(el('dl_min_cust').value);
        dl_max = parseFloat(el('dl_max_cust').value);
        ul_min = parseFloat(el('ul_min_cust').value);
        ul_max = parseFloat(el('ul_max_cust').value);
        el('freq_custom_container').style.display = 'block';
        el('duplex_mode_container').style.display = 'block';
    }
    
    el('tdd_config').style.display = (duplex_mode === 'TDD') ? 'flex' : 'none';
    el('fdd_config').style.display = (duplex_mode !== 'TDD') ? 'flex' : 'none';

    let calc_min = duplex_mode === 'SUL' ? ul_min : dl_min;
    let calc_max = duplex_mode === 'SUL' ? ul_max : dl_max;
    
    const bw_select = el('selected_bw');
    bw_select.innerHTML = '';
    const bw_keys = Object.keys(active_n_rb_table).map(Number).sort((a,b)=>a-b);
    let valid_bws = bw_keys.filter(bw => bw <= (calc_max - calc_min));
    if(valid_bws.length === 0) valid_bws = [bw_keys[0]];
    valid_bws.forEach(bw => {
        bw_select.add(new Option(bw, bw));
    });
    bw_select.value = valid_bws[valid_bws.length-1];
    
    updateBW();
}

function updateBW() {
    const bw = parseFloat(el('selected_bw').value);
    const scs_select = el('selected_scs');
    scs_select.innerHTML = '';
    const available_scs = Object.keys(active_n_rb_table[bw] || {}).map(Number).sort((a,b)=>a-b);
    if(available_scs.length === 0) return;
    available_scs.forEach(s => scs_select.add(new Option(s, s)));
    scs_select.value = available_scs[0];
    updateSCS();
}

function updateSCS() {
    const bw = parseFloat(el('selected_bw').value);
    const scs = parseFloat(el('selected_scs').value);
    let max_prb = active_n_rb_table[bw] ? active_n_rb_table[bw][scs] : null;
    if (!max_prb) max_prb = 11;
    el('conf_rbs').max = max_prb;
    el('conf_rbs').value = max_prb;
    el('bwp_len').value = max_prb;
    el('bwp_len').max = max_prb;
    updateApp();
}

function setAlloc(mode) {
    const total = parseInt(el('conf_rbs').value);
    let start=0, len=total;
    if(mode === 'OF') { start=0; len=total; }
    else if(mode === 'IF') { const l = Math.max(1, Math.floor(total/2)); start=Math.floor((total-l)/2); len=l; }
    else if(mode === 'E1') { start=0; len=1; }
    else if(mode === 'I1') { start=1; len=1; }
    el('bwp_start').value = start;
    el('bwp_len').value = len;
    updateApp();
}

function updateApp() {
    if (el('user_band').value.trim() === '') return;
    if(!active_n_rb_table[el('selected_bw').value]) return;
    
    if(el('user_band').value.trim().toLowerCase() in active_band_db === false) {
        duplex_mode = el('duplex_mode').value;
        dl_min = parseFloat(el('dl_min_cust').value);
        dl_max = parseFloat(el('dl_max_cust').value);
        ul_min = parseFloat(el('ul_min_cust').value);
        ul_max = parseFloat(el('ul_max_cust').value);
    }
    
    const bw = parseFloat(el('selected_bw').value);
    const scs = parseInt(el('selected_scs').value);
    const conf_rbs = parseInt(el('conf_rbs').value);
    const bwp_s = parseInt(el('bwp_start').value);
    const bwp_l = parseInt(el('bwp_len').value);
    const test_ch = el('test_ch').value;
    
    const max_core = Math.floor(bwp_l / 6) * 6;
    el('core_l').max = max_core;
    el('core_s').max = Math.max(0, bwp_l - parseInt(el('core_l').value));
    
    const core_d = parseInt(el('core_d').value);
    const core_l = parseInt(el('core_l').value);
    const core_s = parseInt(el('core_s').value);
    
    const ul_wave = el('ul_waveform').value;
    const pucch_format = parseInt(el('pucch_format') ? el('pucch_format').value : 1);
    const is_short_pucch = (pucch_format === 0 || pucch_format === 2);
    const pucch_edge_rbs = (pucch_format === 2 || pucch_format === 3) ? Math.max(2, Math.floor(bwp_l * 0.05)) : 1;
    const pusch_rb_len = Math.max(0, bwp_l - 2 * pucch_edge_rbs);
    
    let dft_err = "";
    if (ul_wave === 'DFT-s-OFDM' && pusch_rb_len > 0) {
        let n = pusch_rb_len;
        [2,3,5].forEach(p => { while(n%p===0 && n>1) n/=p; });
        if(n!==1) dft_err = `❌ PUSCH (${pusch_rb_len} RB) violates DFT rule.`;
    }
    el('dft_error').innerText = dft_err;

    let spacing_mhz = (duplex_mode !== 'SDL' && duplex_mode !== 'SUL') ? ul_min - dl_min : 0;
    
    let n_slots, slots=[], n_symbols, dl_syms=0, ul_syms=0;
    let s_dl_syms=10, s_f_syms=2, s_ul_syms=2;
    if(duplex_mode === 'TDD') {
        const t_arr = el('tdd_pattern').value.toUpperCase().split(',').map(s=>s.trim());
        slots = t_arr;
        n_slots = slots.length;
        const s_arr = el('s_format').value.split(':').map(Number);
        if(s_arr.length===3 && s_arr[0]+s_arr[1]+s_arr[2]===14) { s_dl_syms=s_arr[0]; s_f_syms=s_arr[1]; s_ul_syms=s_arr[2]; }
        
        dl_syms = slots.filter(s=>s==='D').length * 14 + slots.filter(s=>s==='S').length * s_dl_syms;
        ul_syms = slots.filter(s=>s==='U').length * 14 + slots.filter(s=>s==='S').length * s_ul_syms;
        n_symbols = n_slots * 14;
    } else {
        n_slots = parseInt(el('n_slots').value);
        n_symbols = n_slots * 14;
        dl_syms = duplex_mode !== 'SUL' ? n_symbols : 0;
        ul_syms = duplex_mode !== 'SDL' ? n_symbols : 0;
    }
    const total_symbols_in_pattern = Math.max(1, n_symbols);

    let calc_min = duplex_mode === 'SUL' ? ul_min : dl_min;
    let calc_max = duplex_mode === 'SUL' ? ul_max : dl_max;
    let f_l = calc_min + bw/2.0, f_h = calc_max - bw/2.0;
    let t_fc = test_ch==='Low'? f_l : test_ch==='High'? f_h : (f_l+f_h)/2.0;
    
    let t_arfcn = freq_to_arfcn(t_fc);
    let t_fc_mhz = arfcn_to_freq_mhz(t_arfcn);
    let fc_dl_mhz=0, fc_ul_mhz=0, dl_arfcn=0, ul_arfcn=0;
    
    if(duplex_mode==='SDL') { fc_dl_mhz=t_fc_mhz; dl_arfcn=t_arfcn; }
    else if(duplex_mode==='SUL') { fc_ul_mhz=t_fc_mhz; ul_arfcn=t_arfcn; }
    else { fc_dl_mhz=t_fc_mhz; fc_ul_mhz=t_fc_mhz+spacing_mhz; dl_arfcn=t_arfcn; ul_arfcn=freq_to_arfcn(fc_ul_mhz); }
    
    let arfcn_text = '';
    if(duplex_mode==='SDL') arfcn_text = `📡 DL ARFCN: ${dl_arfcn}\n- Freq: ${fc_dl_mhz.toFixed(3)} MHz`;
    else if(duplex_mode==='SUL') arfcn_text = `📡 UL ARFCN: ${ul_arfcn}\n- Freq: ${fc_ul_mhz.toFixed(3)} MHz`;
    else arfcn_text = `📡 DL ARFCN: ${dl_arfcn}\n- Freq: ${fc_dl_mhz.toFixed(3)} MHz\n\n📡 UL ARFCN: ${ul_arfcn}\n- Freq: ${fc_ul_mhz.toFixed(3)} MHz`;
    el('arfcn_info').innerText = arfcn_text;
    
    const n_sc = conf_rbs * 12;
    let grid_tdd = new Uint8Array(n_sc * n_symbols);
    let grid_dl = new Uint8Array(n_sc * n_symbols);
    let grid_ul = new Uint8Array(n_sc * n_symbols);
    
    function setRect(grid, sc_start, sc_end, sym_start, sym_end, val) {
        sc_start = Math.max(0, sc_start); sc_end = Math.min(n_sc, sc_end);
        sym_start = Math.max(0, sym_start); sym_end = Math.min(n_symbols, sym_end);
        for (let s = sym_start; s < sym_end; s++) {
            for (let c = sc_start; c < sc_end; c++) grid[c + s * n_sc] = val;
        }
    }
    function setPattern(grid, sc_start, sc_end, sc_step, sym_start, sym_end, sym_step, val) {
        sc_start = Math.max(0, sc_start); sc_end = Math.min(n_sc, sc_end);
        sym_start = Math.max(0, sym_start); sym_end = Math.min(n_symbols, sym_end);
        for(let s=sym_start; s<sym_end; s+=sym_step) {
            for(let c=sc_start; c<sc_end; c+=sc_step) grid[c + s * n_sc] = val;
        }
    }
    
    function fill_dl(grid, s) {
        setRect(grid, bwp_s*12, (bwp_s+bwp_l)*12, s, s+14, PDSCH);
        if(core_l>0 && core_d>0) setRect(grid, (bwp_s+core_s)*12, (bwp_s+core_s+core_l)*12, s, s+core_d, PDCCH);
        setPattern(grid, bwp_s*12, (bwp_s+bwp_l)*12, 1, s+(core_d===3?3:2), s+(core_d===3?3:2)+1, 1, DMRS_DL);
        
        // Thicken PTRS visually so it is obvious
        for(let thick=0; thick<4; thick++) {
            setPattern(grid, bwp_s*12+thick, (bwp_s+bwp_l)*12, 24, s+4, s+13, 4, PTRS_DL);
        }
        
        // TS 38.211: CSI-RS pattern (example periodic placement)
        setPattern(grid, bwp_s*12, (bwp_s+bwp_l)*12, 4, s+8, s+9, 1, CSI_RS);
        let center = bwp_s + Math.floor(bwp_l/2);
        let ssb_start = Math.max(0, (center-10)*12);
        let ssb_end = Math.min(ssb_start+240, n_sc);
        if(ssb_end > ssb_start) setRect(grid, ssb_start, ssb_end, s+2, s+6, SSB);
    }
    
    function fill_ul(grid, s) {
        let pe = pucch_edge_rbs * 12;
        let pucch_start_sym = is_short_pucch ? s + 11 : s;
        let pucch_end_sym = s + 13;
        
        if(pusch_rb_len>0) {
            if (is_short_pucch) {
                setRect(grid, bwp_s*12, (bwp_s+bwp_l)*12, s, pucch_start_sym, PUSCH);
                setRect(grid, bwp_s*12+pe, (bwp_s+bwp_l)*12-pe, pucch_start_sym, pucch_end_sym, PUSCH);
                setPattern(grid, bwp_s*12, (bwp_s+bwp_l)*12, 1, s, s+1, 1, DMRS_UL);
                for(let thick=0; thick<4; thick++) {
                    setPattern(grid, bwp_s*12+thick, (bwp_s+bwp_l)*12, 24, s+2, pucch_start_sym-1, 4, PTRS_UL);
                }
            } else {
                setRect(grid, bwp_s*12+pe, (bwp_s+bwp_l)*12-pe, s, pucch_end_sym, PUSCH);
                setPattern(grid, bwp_s*12+pe, (bwp_s+bwp_l)*12-pe, 1, s, s+1, 1, DMRS_UL);
                for(let thick=0; thick<4; thick++) {
                    setPattern(grid, bwp_s*12+pe+thick, (bwp_s+bwp_l)*12-pe, 24, s+2, pucch_end_sym-1, 4, PTRS_UL);
                }
            }
            // TS 38.211: SRS typically placed at the end of the slot
            setPattern(grid, bwp_s*12, (bwp_s+bwp_l)*12, 2, s+13, s+14, 1, SRS);
        }
        
        let center = bwp_s + Math.floor(bwp_l/2);
        let pr_start = Math.max(0, (center-3)*12);
        let pr_end = Math.min(pr_start+72, n_sc);
        if(pr_end > pr_start) setRect(grid, pr_start, pr_end, s+2, s+10, PRACH);
        
        if (is_short_pucch) {
            setRect(grid, bwp_s*12, bwp_s*12+pe, pucch_start_sym, pucch_end_sym, PUCCH);
            setRect(grid, (bwp_s+bwp_l)*12-pe, (bwp_s+bwp_l)*12, pucch_start_sym, pucch_end_sym, PUCCH);
        } else {
            let mid_sym = s + Math.floor((pucch_end_sym - s) / 2);
            setRect(grid, bwp_s*12, bwp_s*12+pe, s, mid_sym, PUCCH);
            setRect(grid, (bwp_s+bwp_l)*12-pe, (bwp_s+bwp_l)*12, mid_sym, pucch_end_sym, PUCCH);
            setRect(grid, (bwp_s+bwp_l)*12-pe, (bwp_s+bwp_l)*12, s, mid_sym, PUCCH);
            setRect(grid, bwp_s*12, bwp_s*12+pe, mid_sym, pucch_end_sym, PUCCH);
        }
    }
    
    function fill_s_slot(grid, s) {
        if(s_dl_syms>0) {
            setRect(grid, bwp_s*12, (bwp_s+bwp_l)*12, s, s+s_dl_syms, PDSCH);
            if(core_l>0 && core_d>0 && core_d<=s_dl_syms) 
                setRect(grid, (bwp_s+core_s)*12, (bwp_s+core_s+core_l)*12, s, s+core_d, PDCCH);
            if(s_dl_syms>2)
                setPattern(grid, bwp_s*12, (bwp_s+bwp_l)*12, 1, s+(core_d===3?3:2), s+(core_d===3?3:2)+1, 1, DMRS_DL);
        }
        if(s_ul_syms>0) {
            let ul_start = s + 14 - s_ul_syms;
            let pe = pucch_edge_rbs * 12;
            let pucch_start_sym = is_short_pucch ? Math.max(ul_start, s + 14 - 3) : ul_start;
            if (s_ul_syms <= 2) { pucch_start_sym = ul_start; }
            let srs_start = s + 14 - 1;
            let pucch_end_sym = s_ul_syms > 1 ? srs_start : ul_start + s_ul_syms;

            if(pusch_rb_len>0) {
                if(is_short_pucch) {
                    setRect(grid, bwp_s*12, (bwp_s+bwp_l)*12, ul_start, pucch_start_sym, PUSCH);
                    setRect(grid, bwp_s*12+pe, (bwp_s+bwp_l)*12-pe, pucch_start_sym, pucch_end_sym, PUSCH);
                    if(s_ul_syms>2) setPattern(grid, bwp_s*12, (bwp_s+bwp_l)*12, 1, ul_start, ul_start+1, 1, DMRS_UL);
                } else {
                    setRect(grid, bwp_s*12+pe, (bwp_s+bwp_l)*12-pe, ul_start, pucch_end_sym, PUSCH);
                    if(s_ul_syms>2) setPattern(grid, bwp_s*12+pe, (bwp_s+bwp_l)*12-pe, 1, ul_start, ul_start+1, 1, DMRS_UL);
                }
                if(s_ul_syms>1) setPattern(grid, bwp_s*12, (bwp_s+bwp_l)*12, 2, srs_start, srs_start+1, 1, SRS);
            }
            if (is_short_pucch) {
                setRect(grid, bwp_s*12, bwp_s*12+pe, pucch_start_sym, pucch_end_sym, PUCCH);
                setRect(grid, (bwp_s+bwp_l)*12-pe, (bwp_s+bwp_l)*12, pucch_start_sym, pucch_end_sym, PUCCH);
            } else {
                let mid_sym = pucch_start_sym + Math.floor((pucch_end_sym - pucch_start_sym) / 2);
                setRect(grid, bwp_s*12, bwp_s*12+pe, pucch_start_sym, mid_sym, PUCCH);
                setRect(grid, (bwp_s+bwp_l)*12-pe, (bwp_s+bwp_l)*12, mid_sym, pucch_end_sym, PUCCH);
                setRect(grid, (bwp_s+bwp_l)*12-pe, (bwp_s+bwp_l)*12, pucch_start_sym, mid_sym, PUCCH);
                setRect(grid, bwp_s*12, bwp_s*12+pe, mid_sym, pucch_end_sym, PUCCH);
            }
        }
    }
    
    if(duplex_mode==='TDD') {
        slots.forEach((t, i) => {
            if(t==='D') fill_dl(grid_tdd, i*14);
            else if(t==='U') fill_ul(grid_tdd, i*14);
            else if(t==='S') fill_s_slot(grid_tdd, i*14);
        });
    } else if(duplex_mode==='SDL') {
        for(let i=0; i<n_slots; i++) fill_dl(grid_dl, i*14);
    } else if(duplex_mode==='SUL') {
        for(let i=0; i<n_slots; i++) fill_ul(grid_ul, i*14);
    } else {
        for(let i=0; i<n_slots; i++) { fill_dl(grid_dl, i*14); fill_ul(grid_ul, i*14); }
    }
    
    const pfilter = el('port_filter').value;
    function filterGrid(grid) {
        if(pfilter==='COMPOSITE') return grid;
        let set = new Set();
        if(pfilter==='DL1000') set = new Set([PDSCH, DMRS_DL, PTRS_DL]);
        else if(pfilter==='DL2000') set = new Set([PDCCH]);
        else if(pfilter==='DL3000') set = new Set([CSI_RS]);
        else if(pfilter==='DL4000') set = new Set([SSB]);
        else if(pfilter==='UL0') set = new Set([DMRS_UL, PTRS_UL]);
        else if(pfilter==='UL1000') set = new Set([PUSCH, SRS]);
        else if(pfilter==='UL2000') set = new Set([PUCCH]);
        else if(pfilter==='UL4000') set = new Set([PRACH]);
        let next = new Uint8Array(grid.length);
        for(let i=0; i<grid.length; i++) if(set.has(grid[i])) next[i] = grid[i];
        return next;
    }
    
    grid_tdd = filterGrid(grid_tdd);
    grid_dl = filterGrid(grid_dl);
    grid_ul = filterGrid(grid_ul);

    let mu_map = {15:0, 30:1, 60:2, 120:3};
    let mu = mu_map[scs];
    let t_s_mu = (1e-3) / (14 * Math.pow(2, mu));
    let dl_oh = d=> el('domain_selection').value==="FR2" ? 0.18 : 0.14;
    let ul_oh = d=> el('domain_selection').value==="FR2" ? 0.10 : 0.08;
    
    let mod_dict = {"QPSK":2, "16QAM":4, "64QAM":6, "256QAM":8};
    let mimo_dl = parseInt(el('mimo_layers_dl').value);
    let mimo_ul = (ul_wave==='CP-OFDM') ? parseInt(el('mimo_layers_ul').value) : 1;
    if(ul_wave!=='CP-OFDM') el('mimo_layers_ul').value = "1";
    let mod_dl = mod_dict[el('mod_dl_str').value];
    let mod_ul = mod_dict[el('mod_ul_str').value];

    function calcT(layers, qm, oh, rb, syms) {
        if(syms===0 || rb===0) return 0.0;
        return (1e-6) * layers * qm * 1.0 * (948/1024) * (rb*12) / t_s_mu * (1-oh) * (syms/total_symbols_in_pattern);
    }
    
    let t_dl = calcT(mimo_dl, mod_dl, dl_oh(), bwp_l, dl_syms);
    let t_ul = calcT(mimo_ul, mod_ul, ul_oh(), pusch_rb_len, ul_syms);
    let d_duty = (dl_syms/total_symbols_in_pattern)*100;
    let u_duty = (ul_syms/total_symbols_in_pattern)*100;

    el('t_dl_mbps').innerText = t_dl.toFixed(1) + " Mbps";
    el('t_ul_mbps').innerText = t_ul.toFixed(1) + " Mbps";
    el('t_duty').innerText = duplex_mode==='TDD' ? `${d_duty.toFixed(1)}% / ${u_duty.toFixed(1)}%` : `100% / 100%`;
    el('t_res').innerText = `${bwp_l} / ${conf_rbs} PRB`;

    drawChart(1, false, '', '');
    drawChart(2, false, '', '');
    
    if(duplex_mode==='TDD') drawChart(1, true, `> TDD GRID | BAND ${el('user_band').value.toUpperCase()} | ${test_ch.toUpperCase()} CH`, grid_tdd, n_sc, n_symbols, bwp_s, bwp_l);
    else if(duplex_mode==='SDL') drawChart(1, true, `> SDL GRID (DOWNLINK) | BAND ${el('user_band').value.toUpperCase()}`, grid_dl, n_sc, n_symbols, bwp_s, bwp_l);
    else if(duplex_mode==='SUL') drawChart(1, true, `> SUL GRID (UPLINK) | BAND ${el('user_band').value.toUpperCase()}`, grid_ul, n_sc, n_symbols, bwp_s, bwp_l);
    else {
        drawChart(1, true, `> DL GRID | BAND ${el('user_band').value.toUpperCase()}`, grid_dl, n_sc, n_symbols, bwp_s, bwp_l);
        drawChart(2, true, `> UL GRID | SPACING: ${spacing_mhz} MHz`, grid_ul, n_sc, n_symbols, bwp_s, bwp_l);
    }
}

function drawChart(idx, show, title, grid, max_sc, max_sym, bs, bl) {
    const c_id = `chart${idx}_container`;
    el(c_id).style.display = show ? 'flex' : 'none';
    if(!show) return;
    el(`chart${idx}_title`).innerText = title;
    
    const canvas = el(`grid_canvas${idx}`);
    const container = canvas.parentElement;
    const rect = container.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    
    // Set actual crystal-clear high-res canvas
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    const ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);
    
    // clear and set cyber background
    ctx.fillStyle = '#0b101a';
    ctx.fillRect(0, 0, rect.width, rect.height);
    
    // Calculate SCS dependent visual width (shrink time visually on higher SCS)
    const current_scs = parseInt(document.getElementById('selected_scs').value) || 15;
    const mu_map_draw = {15:0, 30:1, 60:2, 120:3};
    const mu_draw = mu_map_draw[current_scs] || 0;
    
    // Scale X-axis width by Math.pow(2, mu)
    const visual_flex_sym = max_sym * Math.pow(2, mu_draw);
    const cellW = rect.width / visual_flex_sym;
    const cellH = rect.height / max_sc;

    // Draw faint grid for CSS styling effect
    if (cellW > 4 && cellH > 4) {
        ctx.strokeStyle = 'rgba(0, 229, 255, 0.05)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        for(let i=0; i<=max_sym; i++) { ctx.moveTo(i*cellW, 0); ctx.lineTo(i*cellW, rect.height); }
        for(let i=0; i<=max_sc; i++) { ctx.moveTo(0, i*cellH); ctx.lineTo(rect.width, i*cellH); }
        ctx.stroke();
    }
    
    function hexToRgba(hex, alpha=1){
        if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
            let c = hex.substring(1).split('');
            if(c.length== 3) c= [c[0], c[0], c[1], c[1], c[2], c[2]];
            c= '0x'+c.join('');
            return {r: (c>>16)&255, g: (c>>8)&255, b: c&255, str: `rgba(${(c>>16)&255}, ${(c>>8)&255}, ${c&255}, ${alpha})`};
        }
        return {r:0, g:0, b:0, str:`rgba(0,0,0,0)`};
    }
    
    const colorsCache = {};
    const colorsLightCache = {};
    for(let k in COLOR_MAP) {
        let rgba = hexToRgba(COLOR_MAP[k], 0.9);
        colorsCache[k] = rgba.str;
        
        let lr = Math.min(255, rgba.r + 60);
        let lg = Math.min(255, rgba.g + 60);
        let lb = Math.min(255, rgba.b + 60);
        colorsLightCache[k] = `rgba(${lr}, ${lg}, ${lb}, 1.0)`;
    }

    let gapX = cellW > 3 ? 1 : 0;
    let gapY = cellH > 3 ? 1 : 0;
    
    ctx.shadowBlur = 0; 
    let gradCache = {};

    for (let s = 0; s < max_sym; s++) {
        let x = s * cellW;
        let c = 0;
        while (c < max_sc) {
            let val = grid[c + s * max_sc];
            if (val > 0) {
                let start_c = c;
                while (c < max_sc && grid[c + s * max_sc] === val) {
                    c++;
                }
                let span = c - start_c;
                
                let h = span * cellH;
                let y = (max_sc - c) * cellH;
                let w = cellW;
                
                let rX = x + gapX/2;
                let rY = y + gapY/2;
                let rW = Math.max(0.5, w - gapX);
                let rH = Math.max(0.5, h - gapY);
                
                // PERFORMANCE OPTIMIZATION: Only use gradient on large blocks. 
                if (span > 6 && rH > 10) {
                    let gKey = `${val}_${y}_${h}`;
                    if (!gradCache[gKey]) {
                        let grad = ctx.createLinearGradient(rX, rY, rX, rY + rH);
                        grad.addColorStop(0, colorsLightCache[val]);
                        grad.addColorStop(1, colorsCache[val]);
                        gradCache[gKey] = grad;
                    }
                    ctx.fillStyle = gradCache[gKey];
                } else {
                    ctx.fillStyle = colorsCache[val];
                }
                
                // Draw rounded Rectangle only if height is large enough
                if (rH > 4) {
                    let radius = Math.min(4, rW/4, rH/4);
                    ctx.beginPath();
                    ctx.moveTo(rX + radius, rY);
                    ctx.lineTo(rX + rW - radius, rY);
                    ctx.quadraticCurveTo(rX + rW, rY, rX + rW, rY + radius);
                    ctx.lineTo(rX + rW, rY + rH - radius);
                    ctx.quadraticCurveTo(rX + rW, rY + rH, rX + rW - radius, rY + rH);
                    ctx.lineTo(rX + radius, rY + rH);
                    ctx.quadraticCurveTo(rX, rY + rH, rX, rY + rH - radius);
                    ctx.lineTo(rX, rY + radius);
                    ctx.quadraticCurveTo(rX, rY, rX + radius, rY);
                    ctx.fill();
                } else {
                    ctx.fillRect(rX, rY, rW, rH);
                }
            } else {
                c++;
            }
        }
    }
    
    // Draw BWP active area
    ctx.shadowBlur = 10;
    ctx.shadowColor = '#ff003c';
    ctx.strokeStyle = '#ff003c';
    ctx.lineWidth = 2;
    ctx.setLineDash([8, 8]);
    ctx.strokeRect(0, rect.height - (bs+bl)*12*cellH, rect.width, bl*12*cellH);
    ctx.setLineDash([]);
    ctx.shadowBlur = 0;
}

// Ensure responsive redrawing
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(updateApp, 100);
});

document.addEventListener("DOMContentLoaded", () => {
    updateDomain();
});

// Signal Information Dictionary for UI Modal
const SIGNAL_INFO = {
    'PDCCH': 'Physical Downlink Control Channel\n\nCarries Downlink Control Information (DCI) such as scheduling assignments, resource allocations, and other vital control data for the UE.',
    'PDSCH': 'Physical Downlink Shared Channel\n\nCarries the main user data payload, paging messages, and System Information Blocks (SIB) from the gNB to the UE.',
    'SSB': 'Synchronization Signal and PBCH Block\n\nContains Primary/Secondary Synchronization Signals (PSS/SSS) and the Physical Broadcast Channel (PBCH). Used for initial cell search, synchronization, and beam measurements.',
    'CSI-RS': 'Channel State Information Reference Signal\n\nUsed by the UE to measure the downlink channel quality and report CQI, PMI, and RI back to the base station for optimal beamforming and scheduling.',
    'PUCCH': 'Physical Uplink Control Channel\n\nCarries Uplink Control Information (UCI) such as HARQ-ACK feedback, Scheduling Requests (SR), and CSI reports from the UE to the gNB.',
    'PUSCH': 'Physical Uplink Shared Channel\n\nCarries the main uplink user data payload from the UE to the gNB.',
    'SRS': 'Sounding Reference Signal\n\nTransmitted by the UE to help the gNB estimate the uplink channel quality over a wider bandwidth, enabling frequency-selective scheduling and reciprocity-based downlink beamforming.',
    'DMRS DL': 'Demodulation Reference Signal (Downlink)\n\nUser-specific reference signals transmitted along with the PDSCH/PDCCH data to enable channel estimation and coherent demodulation at the UE receiver.',
    'DMRS UL': 'Demodulation Reference Signal (Uplink)\n\nUser-specific reference signals transmitted with the PUSCH/PUCCH to enable channel estimation and coherent demodulation at the gNB receiver.',
    'PTRS': 'Phase-Tracking Reference Signal\n\nUsed primarily at higher frequencies (FR2 / mmWave) to track and compensate for oscillator phase noise and common phase error (CPE).',
    'PRACH': 'Physical Random Access Channel\n\nCarries the random access preamble used by the UE for initial access, uplink synchronization, and scheduling requests.',
    'Active BWP': 'Active Bandwidth Part\n\nA contiguous set of physical resource blocks (PRBs) configured for the UE, allowing it to operate in a narrower bandwidth than the full carrier to save power and dynamically adapt to traffic.'
};

window.showInfo = function(type) {
    let info = SIGNAL_INFO[type];
    if(info) {
        let parts = info.split('\n\n');
        document.getElementById('modalTitle').innerText = parts[0] + " (" + type + ")";
        document.getElementById('modalDesc').innerText = parts[1];
        document.getElementById('infoModal').style.display = 'flex';
    }
};

window.closeInfo = function() {
    document.getElementById('infoModal').style.display = 'none';
};
