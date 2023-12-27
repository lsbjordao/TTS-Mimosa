// Import genus Mimosa
import { Mimosa } from '.'

// Import characters
import { 
    Stems, 
    Trichomes,
    Prickles,
    Stipule, 
    Leaf, 
    Inflorescence, 
    Flower,
    Androecium,
    Ginoecium,
    Fruit
} from '../../characters/v1'
import { Bipinnate, Petiole } from '../../characters/v1/Leaf'
import { Rachis, Pinnae } from '../../characters/v1/Leaf/Bipinnate'
import { Spicule } from '../../characters/v1/Leaf/Bipinnate/Rachis/Spicule'
import { Rachilla, Leaflet, Paraphillidia } from '../../characters/v1/Leaf/Bipinnate/Pinnae'
import {
    AdaxialLeaflet, 
    AbaxialLeaflet, 
    MarginLeaflet
} from '../../characters/v1/Leaf/Bipinnate/Pinnae/Leaflet'
import { AdaxialStipule, AbaxialStipule, MarginStipule } from '../../characters/v1/Stipule'
import { Peduncle, CapitateInflorescence } from '../../characters/v1/Inflorescence'
import { Calyx, Corolla, Bracteole } from '../../characters/v1/Flower'
import { Stipe, Epicarp, Replum } from '../../characters/v1/Fruit'
import { Filaments } from '../../characters/v1/Androecium'
import { Ovary } from '../../characters/v1/Ginoecium'
import { Seed } from '../../characters/v1/Seed'

// Import annotation classes
import { Source, DescriptionAuthorship } from '../../characters/v1'


// Description of Mimosa psilocarpa
const Mimosa_psilocarpa = new Mimosa()
Mimosa_psilocarpa.specificEpithet = 'psilocarpa'

Mimosa_psilocarpa.stems = new Stems()

Mimosa_psilocarpa.stipule = new Stipule()
Mimosa_psilocarpa.stipule.margin = new MarginStipule()
Mimosa_psilocarpa.stipule.adaxial = new AdaxialStipule()
Mimosa_psilocarpa.stipule.abaxial = new AbaxialStipule()

Mimosa_psilocarpa.leaf = new Leaf()
Mimosa_psilocarpa.leaf.petiole = new Petiole()
Mimosa_psilocarpa.leaf.bipinnate = new Bipinnate()
Mimosa_psilocarpa.leaf.bipinnate.rachis = new Rachis()
Mimosa_psilocarpa.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_psilocarpa.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_psilocarpa.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_psilocarpa.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_psilocarpa.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_psilocarpa.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMin(5)
Mimosa_psilocarpa.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(6, 9)
Mimosa_psilocarpa.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_psilocarpa.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_psilocarpa.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_psilocarpa.inflorescence = new Inflorescence()
Mimosa_psilocarpa.inflorescence.peduncle = new Peduncle()
Mimosa_psilocarpa.inflorescence.capitate = new CapitateInflorescence()

Mimosa_psilocarpa.flower = new Flower()
Mimosa_psilocarpa.flower.bracteole = new Bracteole()
Mimosa_psilocarpa.flower.calyx = new Calyx()
Mimosa_psilocarpa.flower.corolla = new Corolla()

Mimosa_psilocarpa.androecium = new Androecium()
Mimosa_psilocarpa.androecium.filaments = new Filaments()

Mimosa_psilocarpa.ginoecium = new Ginoecium()
Mimosa_psilocarpa.ginoecium.ovary = new Ovary()

Mimosa_psilocarpa.fruit = new Fruit()
Mimosa_psilocarpa.fruit.stipe = new Stipe()
Mimosa_psilocarpa.fruit.replum = new Replum()
Mimosa_psilocarpa.fruit.epicarp = new Epicarp()

Mimosa_psilocarpa.seed = new Seed()


// Description authorship
Mimosa_psilocarpa.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_psilocarpa.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709351 
})


// Sources


// Export Mimosa psilocarpa
export { Mimosa_psilocarpa }