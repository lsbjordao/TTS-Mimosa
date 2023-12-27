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


// Description of Mimosa ulei
const Mimosa_ulei = new Mimosa()
Mimosa_ulei.specificEpithet = 'ulei'

Mimosa_ulei.stems = new Stems()

Mimosa_ulei.stipule = new Stipule()
Mimosa_ulei.stipule.margin = new MarginStipule()
Mimosa_ulei.stipule.adaxial = new AdaxialStipule()
Mimosa_ulei.stipule.abaxial = new AbaxialStipule()

Mimosa_ulei.leaf = new Leaf()
Mimosa_ulei.leaf.petiole = new Petiole()
Mimosa_ulei.leaf.bipinnate = new Bipinnate()
Mimosa_ulei.leaf.bipinnate.rachis = new Rachis()
Mimosa_ulei.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_ulei.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_ulei.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(4, 15)
Mimosa_ulei.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMax(17)
Mimosa_ulei.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_ulei.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_ulei.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_ulei.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(12, 18)
Mimosa_ulei.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_ulei.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_ulei.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_ulei.inflorescence = new Inflorescence()
Mimosa_ulei.inflorescence.peduncle = new Peduncle()
Mimosa_ulei.inflorescence.capitate = new CapitateInflorescence()

Mimosa_ulei.flower = new Flower()
Mimosa_ulei.flower.bracteole = new Bracteole()
Mimosa_ulei.flower.merism = '4-merous'
Mimosa_ulei.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_ulei.flower.calyx = new Calyx()
Mimosa_ulei.flower.corolla = new Corolla()
Mimosa_ulei.flower.corolla.shape = ['funnelform', 'campanulate']

Mimosa_ulei.androecium = new Androecium()
Mimosa_ulei.androecium.filaments = new Filaments()
Mimosa_ulei.androecium.filaments.colour = 'pinkish'

Mimosa_ulei.ginoecium = new Ginoecium()
Mimosa_ulei.ginoecium.ovary = new Ovary()

Mimosa_ulei.fruit = new Fruit()
Mimosa_ulei.fruit.stipe = new Stipe()
Mimosa_ulei.fruit.replum = new Replum()
Mimosa_ulei.fruit.epicarp = new Epicarp()

Mimosa_ulei.seed = new Seed()


// Description authorship
Mimosa_ulei.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_ulei.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709351 
})


// Sources


// Export Mimosa ulei
export { Mimosa_ulei }