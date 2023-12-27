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


// Description of Mimosa intricata
const Mimosa_intricata = new Mimosa()
Mimosa_intricata.specificEpithet = 'intricata'

Mimosa_intricata.stems = new Stems()

Mimosa_intricata.stipule = new Stipule()
Mimosa_intricata.stipule.margin = new MarginStipule()
Mimosa_intricata.stipule.adaxial = new AdaxialStipule()
Mimosa_intricata.stipule.abaxial = new AbaxialStipule()

Mimosa_intricata.leaf = new Leaf()
Mimosa_intricata.leaf.petiole = new Petiole()
Mimosa_intricata.leaf.bipinnate = new Bipinnate()
Mimosa_intricata.leaf.bipinnate.rachis = new Rachis()
Mimosa_intricata.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_intricata.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_intricata.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMin(3)
Mimosa_intricata.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(4, 5)
Mimosa_intricata.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMax(6)
Mimosa_intricata.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_intricata.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_intricata.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_intricata.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(3, 5)
Mimosa_intricata.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_intricata.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_intricata.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_intricata.inflorescence = new Inflorescence()
Mimosa_intricata.inflorescence.peduncle = new Peduncle()
Mimosa_intricata.inflorescence.capitate = new CapitateInflorescence()

Mimosa_intricata.flower = new Flower()
Mimosa_intricata.flower.bracteole = new Bracteole()
Mimosa_intricata.flower.merism = '4-merous'
Mimosa_intricata.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_intricata.flower.calyx = new Calyx()
Mimosa_intricata.flower.calyx.shape = 'campanulate'
Mimosa_intricata.flower.corolla = new Corolla()
Mimosa_intricata.flower.corolla.shape = 'turbinate'

Mimosa_intricata.androecium = new Androecium()
Mimosa_intricata.androecium.filaments = new Filaments()

Mimosa_intricata.ginoecium = new Ginoecium()
Mimosa_intricata.ginoecium.ovary = new Ovary()

Mimosa_intricata.fruit = new Fruit()
Mimosa_intricata.fruit.stipe = new Stipe()
Mimosa_intricata.fruit.replum = new Replum()
Mimosa_intricata.fruit.epicarp = new Epicarp()

Mimosa_intricata.seed = new Seed()


// Description authorship
Mimosa_intricata.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_intricata.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa intricata
export { Mimosa_intricata }