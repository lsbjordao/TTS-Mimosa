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


// Description of Mimosa sanguinolenta
const Mimosa_sanguinolenta = new Mimosa()
Mimosa_sanguinolenta.specificEpithet = 'sanguinolenta'

Mimosa_sanguinolenta.stems = new Stems()

Mimosa_sanguinolenta.stipule = new Stipule()
Mimosa_sanguinolenta.stipule.margin = new MarginStipule()
Mimosa_sanguinolenta.stipule.adaxial = new AdaxialStipule()
Mimosa_sanguinolenta.stipule.abaxial = new AbaxialStipule()

Mimosa_sanguinolenta.leaf = new Leaf()
Mimosa_sanguinolenta.leaf.petiole = new Petiole()
Mimosa_sanguinolenta.leaf.bipinnate = new Bipinnate()
Mimosa_sanguinolenta.leaf.bipinnate.rachis = new Rachis()
Mimosa_sanguinolenta.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_sanguinolenta.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_sanguinolenta.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(1, 3)
Mimosa_sanguinolenta.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_sanguinolenta.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_sanguinolenta.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_sanguinolenta.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMax(3)
Mimosa_sanguinolenta.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_sanguinolenta.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_sanguinolenta.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_sanguinolenta.inflorescence = new Inflorescence()
Mimosa_sanguinolenta.inflorescence.peduncle = new Peduncle()
Mimosa_sanguinolenta.inflorescence.capitate = new CapitateInflorescence()

Mimosa_sanguinolenta.flower = new Flower()
Mimosa_sanguinolenta.flower.bracteole = new Bracteole()
Mimosa_sanguinolenta.flower.merism = ['4-merous', '5-merous']
Mimosa_sanguinolenta.flower.calyx = new Calyx()
Mimosa_sanguinolenta.flower.calyx.shape = 'campanulate'
Mimosa_sanguinolenta.flower.corolla = new Corolla()
Mimosa_sanguinolenta.flower.corolla.shape = 'turbinate'

Mimosa_sanguinolenta.androecium = new Androecium()
Mimosa_sanguinolenta.androecium.filaments = new Filaments()
Mimosa_sanguinolenta.androecium.filaments.colour = 'pinkish'

Mimosa_sanguinolenta.ginoecium = new Ginoecium()
Mimosa_sanguinolenta.ginoecium.ovary = new Ovary()

Mimosa_sanguinolenta.fruit = new Fruit()
Mimosa_sanguinolenta.fruit.stipe = new Stipe()
Mimosa_sanguinolenta.fruit.replum = new Replum()
Mimosa_sanguinolenta.fruit.epicarp = new Epicarp()

Mimosa_sanguinolenta.seed = new Seed()


// Description authorship
Mimosa_sanguinolenta.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_sanguinolenta.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa sanguinolenta
export { Mimosa_sanguinolenta }