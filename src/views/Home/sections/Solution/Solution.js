import React from 'react';
import styles from './Solution.css';
import Section from '../../../../components/Section/Section';

const Solution = () => (
    <Section sectionCLass="solution" id="solution" myClass="solText" >
        <div  className="textLeft">
            <h2>SOLUTION</h2>
            <ul>
                <li>
                    Proactive Πρόβλεψη ασθενειών (αρκετά έγκαιρα ώστε να έχει ο
                    παραγωγός την δυνατότητα να επέμβει και να σώσει το φυτό ή να προστατέψει
                    τον αμπελώνα από την διάχυση της ασθένειας).
                    Ταυτόχρονη ελαχιστοποίηση της χρήσης φυτοφαρμάκων διατηρώντας τους δείκτες ασφαλείας υψηλούς
                </li>
                <li>
                    Πρόβλεψη βέλτιστης στιγμής συλλογής- παρακολούθηση της ωρίμανσης του καρπου
                    (διαφορετική ανα υποπεριοχή του αμπελώνα, υψηλή μεταβλητότητα)
                </li>
                <li>
                    Μοντελοποίηση σχεδιασμού φύτευσης του αμπελώνα την επόμενη χρονιά με στόχο  την μεγιστοποίηση
                    ποιότητας ή ποσότητας
                </li>
            </ul>
        </div>
        <div className="solImg">
        </div>
    </Section>
);

export default Solution;
