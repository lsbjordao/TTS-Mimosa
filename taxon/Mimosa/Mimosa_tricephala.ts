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


// Description of Mimosa tricephala
const Mimosa_tricephala = new Mimosa()
Mimosa_tricephala.specificEpithet = 'tricephala'

Mimosa_tricephala.stems = new Stems()

Mimosa_tricephala.stipule = new Stipule()
Mimosa_tricephala.stipule.margin = new MarginStipule()
Mimosa_tricephala.stipule.adaxial = new AdaxialStipule()
Mimosa_tricephala.stipule.abaxial = new AbaxialStipule()

Mimosa_tricephala.leaf = new Leaf()
Mimosa_tricephala.leaf.petiole = new Petiole()
Mimosa_tricephala.leaf.bipinnate = new Bipinnate()
Mimosa_tricephala.leaf.bipinnate.rachis = new Rachis()
Mimosa_tricephala.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_tricephala.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_tricephala.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_tricephala.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_tricephala.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_tricephala.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMin(8)
Mimosa_tricephala.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(10, 17)
Mimosa_tricephala.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMax(19)
Mimosa_tricephala.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_tricephala.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_tricephala.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_tricephala.inflorescence = new Inflorescence()
Mimosa_tricephala.inflorescence.peduncle = new Peduncle()
Mimosa_tricephala.inflorescence.capitate = new CapitateInflorescence()

Mimosa_tricephala.flower = new Flower()
Mimosa_tricephala.flower.bracteole = new Bracteole()
Mimosa_tricephala.flower.calyx = new Calyx()
Mimosa_tricephala.flower.corolla = new Corolla()

Mimosa_tricephala.androecium = new Androecium()
Mimosa_tricephala.androecium.filaments = new Filaments()

Mimosa_tricephala.ginoecium = new Ginoecium()
Mimosa_tricephala.ginoecium.ovary = new Ovary()

Mimosa_tricephala.fruit = new Fruit()
Mimosa_tricephala.fruit.stipe = new Stipe()
Mimosa_tricephala.fruit.replum = new Replum()
Mimosa_tricephala.fruit.epicarp = new Epicarp()

Mimosa_tricephala.seed = new Seed()


// Description authorship
Mimosa_tricephala.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_tricephala.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa tricephala
export { Mimosa_tricephala }